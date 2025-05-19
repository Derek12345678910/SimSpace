import { Facility } from "./facility";
import { Map } from "./map"

export abstract class Industrial extends Facility{
    
    protected finalRevenue: number;
    protected months: number;
    protected finalMaintenance: number;

    protected constructor(name: string, buildCost : number, map : Map){
        super(name, buildCost, map);
    }
}