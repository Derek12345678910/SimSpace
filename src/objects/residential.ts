import { Facility } from "./facility";
import { Map } from "./map"


export abstract class Residential extends Facility{
    protected _population: number = 0
    protected _maxPopulation: number
    protected _happyPopulation: number = 0
    protected _contentPopulation: number = 0
    protected _revenuePerThousand : number
    protected _pollutionPerThousand : number
    protected _maintenanceCostPerThousand : number

    protected constructor(name: string, buildCost : number, map : Map){
        super(name, buildCost, map);
    }

    public get population() : number{
        return this._population;
    }

    public get maxPopulation() : number{
        return this._maxPopulation;
    }

    public  get happyPopulation() : number{
        return this._happyPopulation;
    }

    public get contentPopulation() : number{
        return this._contentPopulation;
    }

    protected abstract managePopulation() : void;

}