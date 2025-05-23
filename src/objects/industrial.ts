import { Facility } from "./facility.js";
import { Map } from "./map.js"

export abstract class Industrial extends Facility{
    
    protected finalRevenue: number;
    protected months: number;
    protected finalMaintenance: number;

    protected constructor(name: string, buildCost : number, map : Map){
        super(name, buildCost, map);
    }
}