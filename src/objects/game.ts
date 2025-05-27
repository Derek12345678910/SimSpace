import { Map } from "./map.js"
import { Plot } from "./plot.js"
import { GlobalEvent } from "./globalevents.js";
import * as GlobalEventObjects from "../children/eventsChilds.js"
import * as LandObjects from "../children/landChilds.js"

import { Facility } from "./facility.js";
import { Residential } from "./residential.js";
import { Commercial } from "./commercial.js";
import { Industrial } from "./industrial.js";
import { Essential } from "./essential.js";

import { gameOver } from "../main.js";

import { Pair } from "../datastructures/pair.js"
import { List } from "../datastructures/list.js"
import { Matrix } from "../datastructures/matrix.js";
import { Queue } from "../datastructures/queue.js";
import { EnvironmentalFacility } from "../children/industrialChilds.js";
  
/**
 * Class for Game Logic
 */
export class Game {

    private _time : number = 0;
    private _population : number = 0;
    private _happyPopulation : number = 0;
    private _contentPopulation : number = 0;
    private _money : number = 5000000000;
    private _pollution : number = 0;
    private _score : number = 0;
    private _timePerMonth : number;
    private _map : Map;
    private _power: number = 0;
    private _selectedButton : string | null = null;

    private eventCalender : List<Pair> = new List<Pair>();

    /**
     * Create the world
     * @param xLength x length of the map
     * @param yLength y length of the map
     * @param timePerMonth time in seconds per month
     */
    public constructor(xLength : number, yLength : number, timePerMonth : number){
        this._map = new Map(xLength, yLength);
        for (let i = 0; i < yLength; i++) {
            for (let j = 0; j < xLength; j++) {
                this._map.setGridCoord(i, j, new LandObjects.Grass(i, j, this._map));
            }
        }
        this._timePerMonth = timePerMonth;
    }

    /**
     * @returns current time of the world
     */
    public get time() : number {
        return this._time;
    }   

    /**
     * @returns current population of the world
     */
    public get population() : number{
        return this._population;
    }

    /**
     * @returns content population of the world
     */
    public get contentpopulation() : number{
        return this._contentPopulation;
    }

    /**
     * @returns happy population of the world
     */
    public get happypopulation() : number{
        return this._happyPopulation;
    }

    /**
     * @returns amount of money the government has
     */
    public get money() : number{
        return this._money;
    }

    /**
     * @returns amount of pollution in the world
     */
    public get pollution() : number{
        return this._pollution;
    }

    /**
     * @returns total power in the world
     */
    public get power(): number{
        return this._power;
    }

    /**
     * Sets the users money
     * @param newMoney New amount of money
     */
    public set money(newMoney: number){
        this._money = newMoney;
    }

    /**
     * @returns score of the world
     */
    public get score() : number{
        return this._score;
    }
    /**
     * @returns the map of the world
     */
    public get map() : Map{
        return this._map;
    }

    /**
     * @returns the amount of time it takes in seconds for a month to pass in the world
     */
    public get timePerMonth() : number{
        return this._timePerMonth;
    }

    public get selectedButton() : string | null{
        return this._selectedButton
    }

    public set selectedButton(name : string | null){
        this._selectedButton = name;
    }

    /**
     * Called every month to update the world
     */
    public updateNewMonth() : void {
        this.checkEvents();
        if(this.eventCalender.length !== 0){
            gameOver();
        }

        this._time += 10;

        for(let i=0; i<this._map.mapSizeY; i++){
            for(let j=0; j<this._map.mapSizeX; j++){
                let plotObject : Plot = this._map.getGridCoord(j, i) as Plot;
                plotObject.updateMonth();
            }
        }
        this.collectPopulation();
        this._money -= this.collectMaintenance();
        this._pollution = this.collectPollution();
        this._score = this.calculateScores();
        this._power += this.collectPower();
        if(this._power >= 0){
            this._money += this.collectRevenue();
        }    
    }

    /**
     * Checks if any natural events will happen
     */
    private checkEvents() : void{
        if(this._map.defenseSystem === null){
            if(GlobalEventObjects.AlienInvasion.checkEvent() === true){
                this.eventCalender.push(new Pair(this._time, new GlobalEventObjects.AlienInvasion(this._time)))
            }
            if(GlobalEventObjects.Asteroid.checkEvent() === true){
                this.eventCalender.push(new Pair(this._time, new GlobalEventObjects.Asteroid(this._time)))
            }
        }
    }

    /**
     * Calculates the score of the planet
     * @returns Returns the score number
     */
    private calculateScores() : number{
        let newScore : number = 0;

        newScore = (3 * this._happyPopulation + this._contentPopulation) - this._pollution;

        return newScore;
    }

    /**
     * Collects the current population
     */
    private collectPopulation() : void {

        // set all back to 0
        this._population = 0;
        this._contentPopulation = 0;
        this._happyPopulation = 0;

        for(let i=0; i<this._map.mapSizeY; i++){
            for(let j=0; j<this._map.mapSizeX; j++){
                let plotObject : Residential = this._map.getGridCoord(j, i) as Residential;
                // check for residential type
                if(Map.checkPlotType(plotObject) === "Residential"){
                    // get the population increases for total, happy, and content
                    let populations: number[] = plotObject.managePopulation();
                    // add it to the world population
                    this._population += populations[0];
                    this._happyPopulation += populations[1];
                    this._contentPopulation += populations[2];
                }
            }
        }
    }

    /**
     * Collects the revenue earned for the month
     * @returns returns the revenue generated by the facilites
     */
    private collectRevenue() : number {

        let revenueMonth : number = 0;

        for(let i=0; i<this._map.mapSizeY; i++){
            for(let j=0; j<this._map.mapSizeX; j++){
                let plotObject : Facility = this._map.getGridCoord(j, i) as Facility;
                // check for facility type
                if(Map.checkFacility(plotObject)){
                    // add the revenue earned by that facility
                    revenueMonth += plotObject.revenueEarned();
                }
            }
        }
        return revenueMonth;
    }

    /**
     * Collects the total maintenance cost for the month
     * @returns Returns the total maintenance cost of the facilites
     */
    private collectMaintenance() : number {

        let maintenanceMonth : number = 0;

        for(let i=0; i<this._map.mapSizeY; i++){
            for(let j=0; j<this._map.mapSizeX; j++){
                let plotObject : Facility = this._map.getGridCoord(j, i) as Facility;
                // check for facility type
                if(Map.checkFacility(plotObject)){
                    // add the maintenance cost of the facility
                    maintenanceMonth += plotObject.maintenanceLost();
                }
            }
        }
        return maintenanceMonth;
    }

    /**
     * Collects the total pollution on the map for the month
     * @returns returns the total pollution in the map
     */
    private collectPollution() : number {

        let pollutionMonth : number = 0;

        for(let i=0; i<this._map.mapSizeY; i++){
            for(let j=0; j<this._map.mapSizeX; j++){
                let plotObject : Facility = this._map.getGridCoord(j, i) as Facility;
                if(Map.checkFacility(plotObject)){
                    plotObject.pollutionGenerated();
                    let pollutionAmount : number = this._map.getPollutionCoord(j, i) as number;
                    pollutionMonth += pollutionAmount;   
                }
                if(plotObject instanceof EnvironmentalFacility){
                    // specifically do the enviormental up to 10 units                    
                    let q : Queue<Pair> = new Queue<Pair>();

                    let plotObject2 : EnvironmentalFacility = this._map.getGridCoord(j, i) as EnvironmentalFacility;
            
                    // a matrix holding the distances of each unit relative to the starting point
                    let vis : Matrix<number> = new Matrix<number>(this._map.mapSizeX, this._map.mapSizeY, -1);
            
                    q.enqueue(new Pair(j, i));
                    vis.setCoord(j, i, 0); // set start 0
            
                    while(!q.isEmpty()){
            
                        let cur : Pair = q.dequeue() as Pair;
                        let dis : number = vis.getCoord(cur.key, cur.val) as number;
                        let curPollution : number = this._map.pollutionGrid.getCoord(j, i) as number;
            
                        for(let i=0; i<this._map.bfsDirections.length; i++){
                            let direction : Pair = this._map.bfsDirections[i];
                            let nxt : Pair = new Pair(cur.key + direction.key, cur.val + direction.val);
                            // check if the new coord is not visited and is inside the map
                            if(vis.getCoord(nxt.key, nxt.val) === -1 && nxt.key >= 0 && nxt.key < this._map.mapSizeX && nxt.val >= 0 && nxt.val < this._map.mapSizeY && vis.getCoord(nxt.key, nxt.val) as number <= 10){
                                console.log(curPollution)
                                vis.setCoord(nxt.key, nxt.val, dis + 1);
                                curPollution -= plotObject2.pollutionReduced();
                                if(curPollution < 0) curPollution = 0;
                                q.enqueue(nxt);
                            }
                        }
                    } 
                }
            }
        }
        console.log(pollutionMonth);
        return pollutionMonth;
    }

    /**
     * @returns Total power used by all facilities in the game in one month
     */
    private collectPower(): number{
        let powerMonth : number = 0;

        for(let i=0; i<this._map.mapSizeY; i++){
            for(let j=0; j<this._map.mapSizeX; j++){
                let plotObject : Facility = this._map.getGridCoord(j, i) as Facility;
                // check for facility type
                if(Map.checkFacility(plotObject)){
                    powerMonth -= plotObject.powerCost;
                    powerMonth += plotObject.powerGenerated;
                }             
            }
        }
        return powerMonth;  
    }

}