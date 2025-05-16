import { Plot } from "./plot";

export abstract class Facility extends Plot{
    protected _maintenaceCost: number;
    protected _powerCost: number;
    protected _revenue: number;
    protected _pollution: number;
    protected _reversePollution: number;
    

    protected constructor(name: string){
        super(name);
    }

    get maintenanceCost(): number{
        return this._maintenaceCost;
    }
    get powerCost(): number{
        return this._powerCost;
    }
    get revenue(): number{
        return this._revenue;
    }
    get pollution(): number{
        return this._pollution;
    }
    get reversePollution(): number{
        return this._reversePollution;
    }

    protected abstract revenueEarned(): number
    protected abstract pollutionGenerated(): number
    protected abstract maintenanceLost(): number

}