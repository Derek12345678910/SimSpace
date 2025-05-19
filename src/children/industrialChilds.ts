import { Industrial } from "../objects/industrial";
import { Map } from "../objects/map";


export class Factory extends Industrial{
    
    static override buildingName: string = "Factory";
    static override buildCost: number = 50000000;
    
    /**
     * Constructs a factory building
     * @param x X coordinate of the factory
     * @param y Y coordinate of the factory
     */
    public constructor(x: number, y: number, map : Map){
        super(Factory.buildingName, Factory.buildCost, map);

        this._revenue = 0;
        this._maintenaceCost = 0;
        this._powerCost = 50;
        this._pollution = 20000;
        this._reversePollution = 0;

        this.finalMaintenance = 500000;
        this.months = 5;
        this.finalRevenue = 5000000;

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

export class EnvironmentalFacility extends Industrial{
    static override buildingName: string = "Environmental Facility";
    static override buildCost: number = 200000000;

    /**
     * Constructs an environmental facility
     * @param x X coordinate of the environmental facility
     * @param y Y coordinate of the environmental facility
     */
    constructor(x: number, y:number, map : Map){
        super(EnvironmentalFacility.buildingName, EnvironmentalFacility.buildCost, map);

        this._revenue = 0;
        this._maintenaceCost = 3000000;
        this._powerCost = 75;
        this._pollution = 0;
        this._reversePollution = 30000;

        this.finalMaintenance = 3000000;
        this.months = 0;
        this.finalRevenue = 0;

        this._xPosition = x;
        this._yPosition = y;
    }
    public pollutionReduced(): number{
        return this._reversePollution;
    }
    public override pollutionGenerated(): number {
        return this._pollution;
    }
    public override revenueEarned(): number {
        return this._revenue;
    }
    public override maintenanceLost(): number {
        return this._maintenaceCost;
    }
    static override isBuildable(x: number, y: number, map: Map): string {
        return "true"
    }
    public override fullyFunctional(map: Map): string {
        return "true"
    }    
}