import { Facility } from "./facility";

export abstract class Essential extends Facility{
    static _reversePollution: number = 0;
    static _pollution: number = 0;
    static _revenue: number = 0;
    protected _powerGeneration: number;
    constructor(name: string){
        super(name);
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