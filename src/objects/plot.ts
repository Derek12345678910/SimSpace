import { Map } from "./map"

import { List } from "../datastructures/list";

/**
 * Abstract class for a plot of land on the map
 */
export abstract class Plot {

    static buildCost : number;
    static buildingName : string;

    protected _map : Map;

    protected _name : string;
    protected _buildCost : number
    protected _buildingAge : number;
    protected _xPosition : number;
    protected _yPosition : number;

    /**
     * @returns build cost of the plot
     */
    public get buildCost() : number{
        return this.buildCost;
    }
    public get name() : string {
        return this._name;
    }
    /**
     * @returns x position of plot
     */
    public get xPosition() : number{
        return this._xPosition;
    }
    /**
     * @returns y position of plot
     */
    public get yPosition() : number{
        return this._yPosition;
    }
    /**
     * @returns age of the plot
     */
    public get buildingAge() : number{
        return this._buildingAge;
    }
    /**
     * Sets the age of the plot
     * @param age the age of the plot
     */
    public set buildingAge(age : number){
        this._buildingAge = age;
    }

    /**
     * Create a plot object
     * @param name set the name of the object
     * @param buildCost set the buildcost of the object
     * @param map set the map the object is on
     */
    protected constructor(name : string, buildCost : number, map : Map){
        this._name = name;
        this._buildCost = buildCost;
        this._map = map;
        this._buildingAge = 0;
    }

    static checkCost(money : number) : boolean {
        return true;
    }

    static isBuildable(x : number, y : number, map : Map) : List<string>{
        let problems : List<string> = new List<string>();
        return problems;
    }

    public abstract updateMonth() : void

    protected abstract fullyFunctional() : List<string>

}