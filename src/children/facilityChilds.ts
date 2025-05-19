import { Facility } from "../objects/facility";
import { Map } from "../objects/map";

export class Warehouse extends Facility{
    static override buildCost: number = 10000000;
    static override buildingName: string = "Warehouse";

    public constructor(x : number, y : number, map : Map){
        super(Warehouse.buildingName, Warehouse.buildCost, map);

        this._revenue = 0;
        this._maintenaceCost = 500000;
        this._powerCost = 50;
        this._pollution = 0;
        this._reversePollution = 0;

        this._xPosition = x;
        this._yPosition = y;

    }

    static checkCost(money : number) : boolean {
        return Warehouse.buildCost <= money;
    }

    protected override revenueEarned(): number {
        return this._revenue;
    }

    protected override pollutionGenerated(): number {
        return 1;
    }

    protected override maintenanceLost(): number {
        return 1;
    }
    
    static isBuildable(x : number, y : number, map : Map) : string{
        return "Success";
    }

    public override fullyFunctional(map : Map) : string{
        return "Success"
    }

}