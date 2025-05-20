import { Plot } from "./plot"
import { PlanetaryDefenseSystem } from "../children/plotChilds"; 

import { Facility } from "./facility";
import { Residential } from "./residential";
import { Commercial } from "./commercial";
import { Industrial } from "./industrial";
import { Essential } from "./essential";

import { Queue } from "../datastructures/queue";
import { Pair } from "../datastructures/pair";
import { Matrix } from "../datastructures/matrix"

/**
 * World map
 */
export class Map {

    private _mapSizeX : number;
    private _mapSizeY : number;

    private _grid : Matrix<Plot>;
    private _pollutionGrid : Matrix<number>;

    private _defenseSystem : PlanetaryDefenseSystem | null;

    /**
     * Create world map
     * @param planetSizeX x size of the map
     * @param planetSizeY y size of the map
     */
    public constructor(planetSizeX : number, planetSizeY : number){
        this._grid = new Matrix<Plot>(planetSizeX, planetSizeY, null);
        this._pollutionGrid = new Matrix<number>(planetSizeX, planetSizeY, 0);        
    }

    /**
     * @returns grid of the map
     */
    public get grid() : Matrix<Plot>{
        return this._grid;
    }

    /**
     * @returns grid of the pollution map
     */
    public get pollutionGrid() : Matrix<number>{
        return this._pollutionGrid;
    }

    /**
     * Get the plot of the coordinate
     * @param x x coordinate
     * @param y y coordinate
     * @returns the plot at the coordinate
     */
    public getGridCoord(x : number, y : number) : Plot | null{
        return this._grid.getCoord(x, y);
    }

    /**
     * Gets the pollution at a coordinate
     * @param x x coordinate 
     * @param y y coordinate
     * @returns thes pollution at the coordinate
     */
    public getPollutionCoord(x : number, y : number) : number | null {
        return this._pollutionGrid.getCoord(x, y);
    }

    /**
     * Sets the plot at a plot
     * @param x x coordinate
     * @param y y coordinate
     * @param Plot the plot to set
     * @returns true if the plot is placed
     */
    public setGridCoord(x : number, y : number, Plot : Plot) : boolean{
        this._grid.setCoord(x, y, Plot);
        return true;
    }

    /**
     * Set the pollution at a coordinate
     * @param x x coordinate
     * @param y y coordinate
     * @param pollution pollution at the coordinate
     * @returns true if the pollution is set
     */
    public setPollutionGridCoord(x : number, y : number, pollution : number) : boolean{
        this._pollutionGrid.setCoord(x, y, pollution);
        return true;
    } 

    /**
     * @returns the x map size
     */
    public get mapSizeX() : number {
        return this._mapSizeX;
    }

    /**
     * @returns the y map size
     */
    public get mapSizeY() : number {
        return this._mapSizeY;
    }

    /**
     * @returns the defense system
     */
    public get defenseSystem() : PlanetaryDefenseSystem | null{
        return this._defenseSystem;
    }   

    /**
     * @param defenseSystem the defense system
     */
    public set defenseSystem(defenseSystem : PlanetaryDefenseSystem) {
        this._defenseSystem = defenseSystem;
    }   

    // The directions the BFS goes in
    private bfsDirections: Array<Pair> = [
        new Pair(0, -1), new Pair(0, 1), new Pair(-1, 0), new Pair(1, 0),
        new Pair(-1, -1), new Pair(1, -1), new Pair(-1, 1), new Pair(1, 1)
    ];

    /**
     * Search for closest Plot with certain name
     * @param x starting x value
     * @param y starting y value
     * @param targetName name of the Plot target
     * @returns the distance of the closest target
     */
    public plotBfs(x : number, y : number, targetName : string) : number{
    
        let q : Queue<Pair> = new Queue<Pair>();

        // a matrix holding the distances of each unit relative to the starting point
        let vis : Matrix<number> = new Matrix<number>(this._mapSizeX, this._mapSizeY, -1);

        q.enqueue(new Pair(x, y));
        vis.setCoord(x, y, 0); // set start 0

        while(!q.isEmpty()){

            let cur : Pair = q.dequeue() as Pair;
            let dis : number = vis.getCoord(cur.key, cur.val) as number;
            let curObject : Plot = this._grid.getCoord(cur.key, cur.val) as Plot

            // if you hit the target
            if(curObject.name === targetName){
                return dis;
            }

            for(let i=0; i<this.bfsDirections.length; i++){
                let direction : Pair = this.bfsDirections[i];
                let nxt : Pair = new Pair(cur.key + direction.key, cur.val + direction.val);
                // check if the new coord is not visited and is inside the map
                if(vis.getCoord(nxt.key, nxt.val) !== -1 && nxt.key >= 0 && nxt.key < this._mapSizeX && nxt.val >= 0 && nxt.val < this.mapSizeY){
                    vis.setCoord(nxt.key, nxt.val, dis + 1);
                    q.enqueue(nxt);
                }

            }
        }
        return -1; // no target
    }  

    /**
     * Search for closest Plot with a certain type
     * @param x starting x value
     * @param y starting y value
     * @param typeName name of the type of facility
     * @returns the distance of the closest target
     */
    public typeBfs(x : number, y : number, typeName : string) : number{
    
        let q : Queue<Pair> = new Queue<Pair>();

        // a matrix holding the distances of each unit relative to the starting point
        let vis : Matrix<number> = new Matrix<number>(this._mapSizeX, this._mapSizeY, -1);

        q.enqueue(new Pair(x, y));
        vis.setCoord(x, y, 0); // set start 0

        while(!q.isEmpty()){

            let cur : Pair = q.dequeue() as Pair;
            let dis : number = vis.getCoord(cur.key, cur.val) as number;
            let curObject : Plot = this._grid.getCoord(cur.key, cur.val) as Plot

            // if you hit the target
            if(Map.checkPlotType(curObject) === typeName){
                return dis;
            }

            for(let i=0; i<this.bfsDirections.length; i++){
                let direction : Pair = this.bfsDirections[i];
                let nxt : Pair = new Pair(cur.key + direction.key, cur.val + direction.val);
                // check if the new coord is not visited and is inside the map
                if(vis.getCoord(nxt.key, nxt.val) !== -1 && nxt.key >= 0 && nxt.key < this._mapSizeX && nxt.val >= 0 && nxt.val < this.mapSizeY){
                    vis.setCoord(nxt.key, nxt.val, dis + 1);
                    q.enqueue(nxt);
                }

            }
        }
        return -1; // no target
    }  
    
    /**
     * Check if an object is a facility
     * @param object object to be checked
     * @returns true if the object is a facility
     */
    public static checkFacility(object : Plot) : boolean {
        if(object instanceof Facility) { return true; }
        return false;
    }

    /**
     * Check type of plot
     * @param object object to be checked
     * @returns the plot type in string
     */
    public static checkPlotType(object : Plot) : string {
        if(object instanceof Residential){ return "Residential"; }
        else if(object instanceof Essential){ return "Essential"; }
        else if(object instanceof Industrial){ return "Industrial"; }
        else if(object instanceof Commercial){ return "Commercial"; }
        return "None";
    }

    /**
     * Check if a target is within a range
     * @param x x coordinate 
     * @param y y coordinate
     * @param targetName string name of the target
     * @param range range to be within
     * @param bfsFunc the function of the bfs
     * @returns True if the target is within a certain range
     */
    public searchRange(x : number, y : number, targetName : string, range : number, bfsFunc : any) : boolean {
        // inside range
        if(bfsFunc(x, y, targetName) <= range){
            return true;
        }
        return false;
    }

}