import { Map } from "./map"
import { Plot } from "./plot"
import { GlobalEvent } from "./globalevents";
import * as GlobalEventObjects from "../specifics/globalevents"

import { Pair } from "../datastructures/pair"
import { List } from "../datastructures/list"
  
class Game {
    private _time : number = 0;
    private _population : number = 0;
    private _happyPopulation : number = 0;
    private _contentPopulation : number = 0;
    private _money : number = 5000000000;
    private _pollution : number = 0;
    private _score : number = 0;
    private _timePerMonth : number = 10;
    private _map : Map = new Map(50);

    private eventCalender : List<Pair> = new List<Pair>();

    public constructor(){}

    public get time() : number {
        return this._time;
    }   

    public get population() : number{
        return this._population;
    }

    public get contentpopulation() : number{
        return this._contentPopulation;
    }

    public get happypopulation() : number{
        return this._happyPopulation;
    }

    public get money() : number{
        return this._money;
    }

    public set money(money : number) {
        this._money = money;
    }

    public get pollution() : number{
        return this._pollution;
    }

    public get score() : number{
        return this._score;
    }

    public get map() : Map{
        return this._map;
    }

    public updateNewMonth() : void {
        this.checkEvents();

        this._time ++;

        this._score = this.calculateScores();
    }

    private checkEvents() : void{
        if(GlobalEventObjects.AlienInvasion.checkEvent() === true){
            this.eventCalender.push(new Pair(this._time, new GlobalEventObjects.AlienInvasion(this._time)))
        }
        if(GlobalEventObjects.Asteroid.checkEvent() === true){
            this.eventCalender.push(new Pair(this._time, new GlobalEventObjects.Asteroid(this._time)))
        }
    }

    private calculateScores() : number{
        let newScore : number = 0;

        newScore = (3 * this._happyPopulation + this._contentPopulation) - this._pollution;

        return newScore;
    }

    private collectPopulation() : void {
        for(let i=0; i<this._map.grid.length; i++){
            for(let j=0; j<this._map.grid[i].length; j++){
                let curplot : Plot = this._map.getGridCoord(j, i);
                // check if residential facility
            }
        }
    }

}