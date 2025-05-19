import { Map } from "./map"

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

    static isBuildable(x : number, y : number, map : Map) : string{
        return "Success";
    }

    abstract fullyFunctional(map : Map) : string

    /**
     * Check if a target is within a range
     * @param x x coordinate 
     * @param y y coordinate
     * @param map map that is being searched
     * @param targetName string name of the target
     * @param range range to be within
     * @returns True if the target is within a certain range
     */
    static searchRange(x : number, y : number, map : Map, targetName : string, range : number) : boolean {
        // inside range
        if(map.plotBfs(x, y, targetName) <= range){
            return true;
        }
        return false;
    }

}