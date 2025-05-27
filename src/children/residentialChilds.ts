import { Residential } from "../objects/residential.js";
import { Map } from "../objects/map.js";

import { List } from "../datastructures/list.js";

export class AffordableHome extends Residential{
    static override buildCost : number = 50000000;
    static override buildingName: string = "Affordable Home"

    /** */
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
        this._powerGeneration = 0;

        this._xPosition = x;
        this._yPosition = y;
        this._image = new Image();
        this._image.src = "../src/assets/affordable-home-image.png"
    }

    public override updateMonth(): void {
        this.fullyFunctional();
        this._buildingAge+=1;
    }

    static override checkCost(money: number): boolean {
        return AffordableHome.buildCost <= money;
    }

    static override isBuildable(x: number, y: number, map: Map) : List<string> {
        let problems : List<string> = new List<string>();
        if(!map.searchRange(x, y, "Power Plant", 8, map.plotBfs)){ problems.push("Power Plant") }
        if(!map.searchRange(x, y, "Emergency Service Facility", 8, map.plotBfs)){ problems.push("Emergency Service Facility") }
        if(!map.searchRange(x, y, "Education Centre", 8, map.plotBfs)){ problems.push("Education Centre") }
        if(!map.searchRange(x, y, "Medical Facility", 8, map.plotBfs)){ problems.push("Medical Facility") }
        if(!map.searchRange(x, y, "Government Facility", 8, map.plotBfs)){ problems.push("Government Facility") }

        if(!map.searchRange(x, y, "Store", 5, map.plotBfs)){ problems.push("Store") }

        if(!map.searchRange(x, y, "Restaurant", 8, map.plotBfs)){ problems.push("Restaurant") }
        return problems;
    }

    /**
     * Affordable home revenue earned
     * @returns Revenue earned in one month
     */
    public override revenueEarned(): number {
        return this._revenuePerThousand*Math.floor(this._population/1000);
    }

    /**
     * Affordable home pollution generated
     * Adds pollution to the grid
     */
    public override pollutionGenerated(): void {
        let existingPollution = this._map.getPollutionCoord(this._xPosition, this._yPosition);
        if(existingPollution){
            this._map.setPollutionGridCoord(this._xPosition, this._yPosition, this._pollutionPerThousand*(Math.floor(this._population/1000))+existingPollution);
        }
        else{
            this._map.setPollutionGridCoord(this._xPosition, this._yPosition, this._pollutionPerThousand*(Math.floor(this._population/1000)));
        }
    }
    /**
     * Affordable home maintenance cost lost
     * @returns Maintenance cost in one month
     */
    public override maintenanceLost(): number {
        return this._maintenaceCost + (this._maintenanceCostPerThousand*Math.floor(this._population/1000));
    }

    

    protected override fullyFunctional(): List<string> {
        let problems : List<string> = new List<string>();
        if(!this._map.searchRange(this._xPosition, this._yPosition, "Power Plant", 8, this._map.plotBfs)){ problems.push("Power Plant") }
        if(!this._map.searchRange(this._xPosition, this._yPosition, "Emergency Service Facility", 8, this._map.plotBfs)){ problems.push("Emergency Service Facility") }
        if(!this._map.searchRange(this._xPosition, this._yPosition, "Education Centre", 8, this._map.plotBfs)){ problems.push("Education Centre") }
        if(!this._map.searchRange(this._xPosition, this._yPosition, "Medical Facility", 8, this._map.plotBfs)){ problems.push("Medical Facility") }
        if(!this._map.searchRange(this._xPosition, this._yPosition, "Government Facility", 8, this._map.plotBfs)){ problems.push("Government Facility") }

        if(!this._map.searchRange(this._xPosition, this._yPosition, "Store", 5, this._map.plotBfs)){ problems.push("Store") }

        if(!this._map.searchRange(this._xPosition, this._yPosition, "Restaurant", 8, this._map.plotBfs)){ problems.push("Restaurant") }

        return problems;
    }

    /**
     * Increases population of an affordable home by 10% per month
     * Max population of 25000
     */
    public override managePopulation(): number[] {
        let newPopulation: number = this._maxPopulation*0.1
        if(this._happyPopulation + this._contentPopulation + newPopulation > this._maxPopulation){
            newPopulation = this._maxPopulation - this._happyPopulation - this._contentPopulation;
        }
        this._happyPopulation += newPopulation*0.1
        this._contentPopulation += newPopulation*0.9
        this._population = this._happyPopulation + this._contentPopulation;
        return [this._population, this._happyPopulation, this._contentPopulation];
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
        this._powerGeneration = 0;

        this._xPosition = x;
        this._yPosition = y;

        this._image = new Image();
        this._image.src = "../src/assets/luxury-home-image.png"
    }

    public override updateMonth(): void {
        this.fullyFunctional();
        this._buildingAge+=1;
    }

    static override checkCost(money: number): boolean {
        return LuxuryHome.buildCost <= money;
    }

    static override isBuildable(x: number, y: number, map: Map) : List<string> {
        let problems : List<string> = new List<string>();
        if(!map.searchRange(x, y, "Power Plant", 8, map.plotBfs)){ problems.push("Power Plant") }
        if(!map.searchRange(x, y, "Emergency Service Facility", 8, map.plotBfs)){ problems.push("Emergency Service Facility") }
        if(!map.searchRange(x, y, "Education Centre", 8, map.plotBfs)){ problems.push("Education Centre") }
        if(!map.searchRange(x, y, "Medical Facility", 8, map.plotBfs)){ problems.push("Medical Facility") }
        if(!map.searchRange(x, y, "Government Facility", 8, map.plotBfs)){ problems.push("Government Facility") }

        if(!map.searchRange(x, y, "Store", 5, map.plotBfs)){ problems.push("Store") }

        if(!map.searchRange(x, y, "Restaurant", 8, map.plotBfs)){ problems.push("Restaurant") }

        return problems;
    }

    /**
     * Luxury home revenue
     * @returns Revenue earned in one month
     */
    public override revenueEarned(): number {
        return this._revenuePerThousand*(Math.floor(this._population/1000));
    }

    /**
     * Luxury home pollution generated
     * Adds pollution to the pollution grid
     */
    public override pollutionGenerated(): void {
        let existingPollution = this._map.getPollutionCoord(this._xPosition, this._yPosition);
        if(existingPollution){
            this._map.setPollutionGridCoord(this._xPosition, this._yPosition, this._pollutionPerThousand*(Math.floor(this._population/1000))+existingPollution);
        }
        else{
            this._map.setPollutionGridCoord(this._xPosition, this._yPosition, this._pollutionPerThousand*(Math.floor(this._population/1000)));
        }
    }

    /**
     * Luxury home maintenance cost lost
     * @returns Maintenance cost in one month
     */
    public override maintenanceLost(): number {
        return this._maintenaceCost + (this._maintenanceCostPerThousand*Math.floor(this._population/1000));
    }

    protected override fullyFunctional(): List<string> {
        let problems : List<string> = new List<string>();
        if(!this._map.searchRange(this._xPosition, this._yPosition, "Power Plant", 8, this._map.plotBfs)){ problems.push("Power Plant") }
        if(!this._map.searchRange(this._xPosition, this._yPosition, "Emergency Service Facility", 8, this._map.plotBfs)){ problems.push("Emergency Service Facility") }
        if(!this._map.searchRange(this._xPosition, this._yPosition, "Education Centre", 8, this._map.plotBfs)){ problems.push("Education Centre") }
        if(!this._map.searchRange(this._xPosition, this._yPosition, "Medical Facility", 8, this._map.plotBfs)){ problems.push("Medical Facility") }
        if(!this._map.searchRange(this._xPosition, this._yPosition, "Government Facility", 8, this._map.plotBfs)){ problems.push("Government Facility") }

        if(!this._map.searchRange(this._xPosition, this._yPosition, "Store", 5, this._map.plotBfs)){ problems.push("Store") }

        if(!this._map.searchRange(this._xPosition, this._yPosition, "Restaurant", 8, this._map.plotBfs)){ problems.push("Restaurant") }

        return problems;
    }

    /**
     * Increases population of a luxury home by 10% per month
     * Max population of 10000 if fully funtional, otherwise 5000
     */
    public override managePopulation(): number[] {
        let newPopulation: number;
        if(this.fullyFunctional().length !== 0){
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
        this._population = this._contentPopulation + this._happyPopulation;
        return [this._population,this._happyPopulation,this._contentPopulation];
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
        this._powerGeneration =0;
        
        this._xPosition = x;
        this._yPosition = y;

        this._image = new Image();
        this._image.src = "../src/assets/comfortable-home-image.png"
    }

    public override updateMonth(): void {
        this.fullyFunctional();
        this._buildingAge+=1;
    }

    static override checkCost(money: number): boolean {
        return ComfortableHome.buildCost <= money;
    }

    static override isBuildable(x: number, y: number, map: Map) : List<string> {
        let problems : List<string> = new List<string>();
        if(!map.searchRange(x, y, "Power Plant", 8, map.plotBfs)){ problems.push("Power Plant") }
        if(!map.searchRange(x, y, "Emergency Service Facility", 8, map.plotBfs)){ problems.push("Emergency Service Facility") }
        if(!map.searchRange(x, y, "Education Centre", 8, map.plotBfs)){ problems.push("Education Centre") }
        if(!map.searchRange(x, y, "Medical Facility", 8, map.plotBfs)){ problems.push("Medical Facility") }
        if(!map.searchRange(x, y, "Government Facility", 8, map.plotBfs)){ problems.push("Government Facility") }

        if(!map.searchRange(x, y, "Store", 5, map.plotBfs)){ problems.push("Store") }

        if(!map.searchRange(x, y, "Restaurant", 8, map.plotBfs)){ problems.push("Restaurant") }

        return problems;
    }

    /**
     * Comfortable home revenue
     * @returns Revenue earned in one month
     */
    public override revenueEarned(): number {
        return this._revenuePerThousand*(Math.floor(this._population/1000));
    }

    /**
     * Comfortable home pollution generated
     * Adds pollution to the grid
     */
    public override pollutionGenerated(): void {
        let existingPollution = this._map.getPollutionCoord(this._xPosition, this._yPosition);
        if(existingPollution){
            this._map.setPollutionGridCoord(this._xPosition, this._yPosition, this._pollutionPerThousand*(Math.floor(this._population/1000))+existingPollution);
        }
        else{
            this._map.setPollutionGridCoord(this._xPosition, this._yPosition, this._pollutionPerThousand*(Math.floor(this._population/1000)));
        }
    }

    /**
     * Comfortable home maintenance cost lost
     * @returns Maintenance cost in one month
     */
    public override maintenanceLost(): number {
        return this._maintenaceCost + (this._maintenanceCostPerThousand*Math.floor(this._population/1000));
    }

    protected override fullyFunctional(): List<string> {
        let problems : List<string> = new List<string>();
        if(!this._map.searchRange(this._xPosition, this._yPosition, "Power Plant", 8, this._map.plotBfs)){ problems.push("Power Plant") }
        if(!this._map.searchRange(this._xPosition, this._yPosition, "Emergency Service Facility", 8, this._map.plotBfs)){ problems.push("Emergency Service Facility") }
        if(!this._map.searchRange(this._xPosition, this._yPosition, "Education Centre", 8, this._map.plotBfs)){ problems.push("Education Centre") }
        if(!this._map.searchRange(this._xPosition, this._yPosition, "Medical Facility", 8, this._map.plotBfs)){ problems.push("Medical Facility") }
        if(!this._map.searchRange(this._xPosition, this._yPosition, "Government Facility", 8, this._map.plotBfs)){ problems.push("Government Facility") }

        if(!this._map.searchRange(this._xPosition, this._yPosition, "Store", 5, this._map.plotBfs)){ problems.push("Store") }

        if(!this._map.searchRange(this._xPosition, this._yPosition, "Restaurant", 8, this._map.plotBfs)){ problems.push("Restaurant") }

        return problems;
    }

    /**
     * Increases population of a comfortable home by 10% per month
     * Max population of 15000
     */
    public override managePopulation(): number[] {
        let newPopulation: number = this._maxPopulation*0.1;
        if(this._happyPopulation + this._contentPopulation + newPopulation > this._maxPopulation){
            newPopulation = this._maxPopulation - this._happyPopulation - this._contentPopulation;
        }   
        this._happyPopulation += newPopulation*0.25
        this._contentPopulation += newPopulation*0.75
        this._population = this._happyPopulation + this._contentPopulation;
        return [this._population, this._happyPopulation, this.contentPopulation];
    }

}
