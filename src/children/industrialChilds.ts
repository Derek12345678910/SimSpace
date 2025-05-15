import { Industrial } from "../objects/industrial";
import { Map } from "../objects/map";


class Factory extends Industrial{
    static buildingName: string = "Factory";
    static buildCost: number = 50000000;
    public constructor(x: number, y: number){
        super(Factory.buildingName,0,50,5000000, 20000,0);
        this._xPosition = x;
        this._yPosition = y;
    }
    public revenueEarned(): number {
        return 1
    }
    public pollutionGenerated(): number {
        return this._pollution;
    }
    public maintenanceLost(): number {
        return this._maintenaceCost;
    }
    static override isBuildable(x: number, y: number, map: Map): string {
        return "true"
    }
    public fullyFunctional(map: Map): string {
        return "true"
    }    
}