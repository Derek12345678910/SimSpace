import { Plot } from "./plot"
import { PlanetaryDefenseSystem } from "../specifics/plot"; 
import * as Land from "../specifics/land"

export class Map {
    private _grid : Plot[][];
    private _pollutionGrid : number[][]

    private _defenseSystem : PlanetaryDefenseSystem | null;

    public constructor(planetSize : number){
        this._grid = new Array<Array<Plot>>(planetSize);
        this._pollutionGrid = new Array<Array<number>>(planetSize);
        for(let i=0; i<planetSize; i++){
            this._grid[i] = new Array<Plot>(planetSize);
            this._pollutionGrid[i] = new Array<number>(planetSize);
            for(let j=0; j<planetSize; j++){
                this._grid[j][i] = new Land.Grass(i, j);
                this._pollutionGrid[j][i] = 0;
            }
        }
    }

    public get grid() : Plot[][]{
        return this._grid;
    }

    public get pollutionGrid() : number[][]{
        return this._pollutionGrid;
    }

    public getGridCoord(x : number, y : number) : Plot{
        return this._grid[y][x];
    }

    public getPollutionCoord(x : number, y : number) : number{
        return this._pollutionGrid[y][x];
    }

    public setGridCoord(x : number, y : number, Plot : Plot) : boolean{
        this._grid[y][x] = Plot;
        return true;
    }

    public setPollutionGridCoord(x : number, y : number, pollution : number) : boolean{
        this._pollutionGrid[y][x] = pollution;
        return true;
    } 

    public get defenseSystem() : PlanetaryDefenseSystem | null{
        return this._defenseSystem;
    }   

    public set defenseSystem(defenseSystem : PlanetaryDefenseSystem) {
        this._defenseSystem = defenseSystem;
    }   

    public bfs(x : number, y : number, targetName : string) : number{
        return -1;
    }   
}