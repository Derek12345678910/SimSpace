import { Facility } from "./facility.js";
import { Map } from "./map.js"

export abstract class Commercial extends Facility{
    static _reversePollution: number = 0;
    protected constructor(name: string, buildCost : number, map : Map){
        super(name, buildCost, map);
    }
}