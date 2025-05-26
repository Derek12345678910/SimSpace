import { Plot } from "./plot.js";
import { Map } from "./map.js";

export abstract class Facility extends Plot{
    protected _maintenaceCost: number;
    protected _powerCost: number;
    protected _revenue: number;
    protected _pollution: number;
    protected _reversePollution: number;
    protected _powerGeneration: number;
    

    protected constructor(name: string, buildCost : number, map : Map){
        super(name, buildCost, map);
    }

    get maintenanceCost(): number{
        return this._maintenaceCost;
    }
    /**
     * Facilties power cost
     */
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

    get powerGenerated(): number{
        return this._powerGeneration;
    }

    public abstract revenueEarned(): number
    public abstract pollutionGenerated(): number
    public abstract maintenanceLost(): number

}