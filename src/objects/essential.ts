import { Facility } from "./facility.js";
import { Map } from "./map.js"

export abstract class Essential extends Facility{
    static _reversePollution: number = 0;
    static _pollution: number = 0;
    static _revenue: number = 0;
    protected _powerGeneration: number;
    protected constructor(name: string, buildCost : number, map : Map){
        super(name, buildCost, map);
    }
    protected revenueEarned(): number {
        return 0;
    }
    protected pollutionGenerated(): number {
        return 0;
    }
    public get powerGeneration(): number{
        return this._powerGeneration;
    }
}