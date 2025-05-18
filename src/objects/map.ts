import { Plot } from "./plot"
import { PlanetaryDefenseSystem } from "../children/plotChilds"; 
import * as LandObjects from "../children/landChilds"

import { Queue } from "../datastructures/queue";
import { Pair } from "../datastructures/pair";
import { Matrix } from "../datastructures/matrix"

export class Map {

    private _mapSizeX : number;
    private _mapSizeY : number;

    private _grid : Matrix<Plot>;
    private _pollutionGrid : Matrix<number>;

    private _defenseSystem : PlanetaryDefenseSystem | null;

    public constructor(planetSizeX : number, planetSizeY : number){
        this._grid = new Matrix<Plot>(planetSizeX, planetSizeY, null);
        this._pollutionGrid = new Matrix<number>(planetSizeX, planetSizeY, 0);

        for (let i = 0; i < planetSizeY; i++) {
            for (let j = 0; j < planetSizeX; j++) {
                this._grid.setCoord(i, j, new LandObjects.Grass(i, j));
            }
        }
    }

    public get grid() : Matrix<Plot>{
        return this._grid;
    }

    public get pollutionGrid() : Matrix<number>{
        return this._pollutionGrid;
    }

    public getGridCoord(x : number, y : number) : Plot | null{
        return this._grid.getCoord(x, y);
    }

    public getPollutionCoord(x : number, y : number) : number | null {
        return this._pollutionGrid.getCoord(x, y);
    }

    public setGridCoord(x : number, y : number, Plot : Plot) : boolean{
        this._grid.setCoord(x, y, Plot);
        return true;
    }

    public setPollutionGridCoord(x : number, y : number, pollution : number) : boolean{
        this._pollutionGrid.setCoord(x, y, pollution);
        return true;
    } 

    public get mapSizeX() : number {
        return this._mapSizeX;
    }

    public get mapSizeY() : number {
        return this._mapSizeY;
    }

    public get defenseSystem() : PlanetaryDefenseSystem | null{
        return this._defenseSystem;
    }   

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
}