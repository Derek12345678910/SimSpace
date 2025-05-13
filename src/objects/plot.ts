import { Map } from "./map"

export abstract class Plot {

    static buildCost : number;
    static buildingName : string;

    protected _name : string;
    protected _buildingAge : number;
    protected _xPosition : number;
    protected _yPosition : number;

    public get buildCost() : number{
        return this.buildCost;
    }
    public get xPosition() : number{
        return this._xPosition;
    }
    public get yPosition() : number{
        return this._yPosition;
    }
    public get buildingAge() : number{
        return this._buildingAge;
    }
    public set buildingAge(age : number){
        this._buildingAge = age;
    }

    protected constructor(name : string){
        this._name = name;
        this._buildingAge = 0;
    }

    static checkCost(money : number) : boolean {
        return true;
    }

    static isBuildable(x : number, y : number, map : Map) : string{
        return "Success";
    }

    abstract fullyFunctional(map : Map) : string

    static searchRange(x : number, y : number, map : Map, targetName : string, range : number) : boolean{
        return true;
    }

}