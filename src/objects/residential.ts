import { Facility } from "./facility";


export abstract class Residential extends Facility{
    protected _startPopulation: number = 0
    protected _maxPopulation: number
    protected _happyPopulation: number = 0
    protected _contentPopulation: number = 0
    protected _revenuePerThousand : number
    protected _pollutionPerThousand : number
    protected _maintenanceCostPerThousand : number

    protected constructor(name : string){
        super(name);
    }

    public get startPopulation() : number{
        return this._startPopulation;
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