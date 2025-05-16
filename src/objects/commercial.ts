import { Facility } from "./facility";
import { Map } from "./map";

export abstract class CommercialFacility extends Facility{
    static _reversePollution: number = 0;
    protected constructor(name: string){
        super(name);
    }
}