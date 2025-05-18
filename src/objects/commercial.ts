import { Facility } from "./facility";

export abstract class Commercial extends Facility{
    static _reversePollution: number = 0;
    protected constructor(name: string){
        super(name);
    }
}