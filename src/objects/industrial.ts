import { Facility } from "./facility";

export abstract class Industrial extends Facility{
    
    protected finalRevenue: number;
    protected months: number;
    protected finalMaintenance: number;

    protected constructor(name: string){
        super(name);
    }
}