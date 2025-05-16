import { Residential } from "../objects/residential";
import { Map } from "../objects/map";

export class AffordableHome extends Residential{
    static override buildCost : number = 50000000;
    static override buildingName: string = "Affordable Home"

    constructor(x : number, y : number){
        super(AffordableHome.buildingName);

        this._maxPopulation = 25000;
        this._revenuePerThousand = 10000;
        this._pollutionPerThousand = 10;
        this._maintenanceCostPerThousand = 2000;

        this._maintenaceCost = 8000;
        this._powerCost = 25;
        this._revenue = 0;
        this._pollution = 0;
        this._reversePollution = 0;

        this._xPosition = x;
        this._yPosition = y;

    }

    static override isBuildable(x: number, y: number, map: Map): string {
        return "true";
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

    public override fullyFunctional(map: Map): string {
        return "a"
    }

    protected override managePopulation(): void {
        
    }

}

export class LuxuryHome extends Residential{
    static override buildCost : number = 1000000000;
    static override buildingName: string = "Luxury Home"

    constructor(x : number, y : number){
        super(LuxuryHome.buildingName);

        this._maxPopulation = 10000;
        this._revenuePerThousand = 15000000;
        this._pollutionPerThousand = 500;
        this._maintenanceCostPerThousand = 1000000;

        this._maintenaceCost = 10000000;
        this._powerCost = 50;
        this._revenue = 0;
        this._pollution = 0;
        this._reversePollution = 0;

        this._xPosition = x;
        this._yPosition = y;

    }

    static override isBuildable(x: number, y: number, map: Map): string {
        return "true";
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

    public override fullyFunctional(map: Map): string {
        return "a"
    }

    protected override managePopulation(): void {
        
    }

}

export class ComfortableHome extends Residential{
    static override buildCost : number = 500000000;
    static override buildingName: string = "Comfortable Home"

    constructor(x : number, y : number){
        super(ComfortableHome.buildingName);

        this._maxPopulation = 15000;
        this._revenuePerThousand = 1000000;
        this._pollutionPerThousand = 50;
        this._maintenanceCostPerThousand = 50000;

        this._maintenaceCost = 40000;
        this._powerCost = 50;
        this._revenue = 0;
        this._pollution = 0;
        this._reversePollution = 0;
        
        this._xPosition = x;
        this._yPosition = y;

    }

    static override isBuildable(x: number, y: number, map: Map): string {
        return "true";
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

    public override fullyFunctional(map: Map): string {
        return "a"
    }

    protected override managePopulation(): void {
        
    }

}
