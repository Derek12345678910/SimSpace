import { Residential } from "../objects/residential";
import { Map } from "../objects/map";

export class AffordableHome extends Residential{
    static override buildCost : number = 50000000;
    static override buildingName: string = "Affordable Home"

    constructor(x : number, y : number, map : Map){
        super(AffordableHome.buildingName, AffordableHome.buildCost, map);

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

    /**
     * Affordable home revenue earned
     * @returns Revenue earned in one month
     */
    protected override revenueEarned(): number {
        return this._revenuePerThousand*Math.floor(this._population/1000);
    }

    /**
     * Affordable home pollution generated
     * @returns Pollution generated in one month
     */
    protected override pollutionGenerated(): number {
        return this._pollutionPerThousand*(Math.floor(this._population/1000));
    }
    /**
     * Affordable home maintenance cost lost
     * @returns Maintenance cost in one month
     */
    protected override maintenanceLost(): number {
        return this._maintenaceCost + (this._maintenanceCostPerThousand*Math.floor(this._population/1000));
    }

    public override fullyFunctional(map: Map): string {
        return "a"
    }

    /**
     * Increases population of an affordable home by 10% per month
     * Max population of 25000
     */
    protected override managePopulation(): void {
        let newPopulation: number = this._maxPopulation*0.1
        if(this._happyPopulation + this._contentPopulation + newPopulation > this._maxPopulation){
            newPopulation = this._maxPopulation - this._happyPopulation - this._contentPopulation;
        }
        this._happyPopulation += newPopulation*0.1
        this._contentPopulation += newPopulation*0.9
    }

}

export class LuxuryHome extends Residential{
    static override buildCost : number = 1000000000;
    static override buildingName: string = "Luxury Home"

    constructor(x : number, y : number, map : Map){
        super(LuxuryHome.buildingName, LuxuryHome.buildCost, map);

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

    /**
     * Luxury home revenue
     * @returns Revenue earned in one month
     */
    protected override revenueEarned(): number {
        return this._revenuePerThousand*(Math.floor(this._population/1000));
    }

    /**
     * Luxury home pollution generated
     * @returns Pollution generated in one month
     */
    protected override pollutionGenerated(): number {
        return this._pollutionPerThousand*(Math.floor(this._population/1000));
    }

    /**
     * Luxury home maintenance cost lost
     * @returns Maintenance cost in one month
     */
    protected override maintenanceLost(): number {
        return this._maintenaceCost + (this._maintenanceCostPerThousand*Math.floor(this._population/1000));
    }

    public override fullyFunctional(): string {
        return "a"
    }

    /**
     * Increases population of a luxury home by 10% per month
     * Max population of 10000 if fully funtional, otherwise 5000
     */
    protected override managePopulation(): void {
        let newPopulation: number;
        if(!this.fullyFunctional()){
            newPopulation= 5000*0.1;
        }
        else{
            newPopulation = this._maxPopulation*0.1;
        }
        if(this._happyPopulation + this._contentPopulation + newPopulation > this._maxPopulation){
            newPopulation = this._maxPopulation - this._happyPopulation - this._contentPopulation;
        }
        this._happyPopulation += newPopulation/2;
        this._contentPopulation += newPopulation/2;
    }

}

export class ComfortableHome extends Residential{
    static override buildCost : number = 500000000;
    static override buildingName: string = "Comfortable Home"

    constructor(x : number, y : number, map : Map){
        super(ComfortableHome.buildingName, ComfortableHome.buildCost, map);

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

    /**
     * Comfortable home revenue
     * @returns Revenue earned in one month
     */
    protected override revenueEarned(): number {
        return this._revenuePerThousand*(Math.floor(this._population/1000));
    }

    /**
     * Comfortable home pollution generated
     * @returns Pollution generated in one month
     */
    protected override pollutionGenerated(): number {
        return this._pollutionPerThousand*(Math.floor(this._population/1000));
    }

    /**
     * Comfortable home maintenance cost lost
     * @returns Maintenance cost in one month
     */
    protected override maintenanceLost(): number {
        return this._maintenaceCost + (this._maintenanceCostPerThousand*Math.floor(this._population/1000));
    }

    public override fullyFunctional(map: Map): string {
        return "a"
    }

    /**
     * Increases population of a comfortable home by 10% per month
     * Max population of 15000
     */
    protected override managePopulation(): void {
        let newPopulation: number = this._maxPopulation*0.1;
        if(this._happyPopulation + this._contentPopulation + newPopulation > this._maxPopulation){
            newPopulation = this._maxPopulation - this._happyPopulation - this._contentPopulation;
        }   
        this._happyPopulation += newPopulation*0.25
        this._contentPopulation += newPopulation*0.75
    }

}
