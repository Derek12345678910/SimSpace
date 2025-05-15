import { Facility } from "./facility";
import { Map } from "./map";

export abstract class CommercialFacility extends Facility{
    static _reversePollution: number = 0;
    protected constructor(name: string, maintenanceCost: number, powerCost: number, revenue: number, pollution: number, reversePollution: number){
        super(name, maintenanceCost, powerCost, revenue, pollution, reversePollution);
    }
}