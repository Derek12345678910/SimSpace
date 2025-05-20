import { Facility } from "../objects/facility";
import { Map } from "../objects/map";

import { List } from "../datastructures/list";

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

    public override updateMonth(): void {
        
    }

    static checkCost(money : number) : boolean {
        return Warehouse.buildCost <= money;
    }

    /**
     * Warehouse revenue
     * @returns Revenue earned in one month
     */
    protected override revenueEarned(): number {
        return this._revenue;
    }

    /**
     * Warehouse pollution
     * @returns Pollution generated in one month
     */
    protected override pollutionGenerated(): number {
        return 1;
    }

    /**
     * Warehouse maintenance cost
     * @returns Maintenance cost lost in one month
     */
    protected override maintenanceLost(): number {
        return this._maintenaceCost;
    }
    
    static override isBuildable(x: number, y: number, map: Map) : List<string> {
            let problems : List<string> = new List<string>();    
            return problems;
        }
    public fullyFunctional(): List<string> {
        let problems : List<string> = new List<string>();
        return problems;
    }    

}