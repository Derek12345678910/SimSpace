import { Facility } from "./facility";

export abstract class Industrial extends Facility{
    protected finalRevenue: number;
    protected months: number;
    protected finalMaintenance: number;
    protected constructor(name: string, finalMaintenanceCost: number, powerCost: number, finalRevenue: number, pollution: number, reversePollution: number){
        super(name, finalMaintenanceCost, powerCost, finalRevenue, pollution, reversePollution);
    }
}