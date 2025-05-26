import { Industrial } from "../objects/industrial.js";
import { Map } from "../objects/map.js";
import { Pair } from "../datastructures/pair.js";
import { Matrix } from "../datastructures/matrix.js";
import { Queue } from "../datastructures/queue.js";

import { List } from "../datastructures/list.js";

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
        this._powerGeneration = 0;;

        this.finalMaintenance = 500000;
        this.months = 5;
        this.finalRevenue = 5000000;
        
        this._xPosition = x;
        this._yPosition = y;
        this._image = new Image();
        this._image.src = "../src/assets/factory-image.png"

    }
    public override updateMonth(): void {
        this._buildingAge+=1;
    }

    /**
     * Factory revenue
     * @returns Revenue earned in one month
     */
    public revenueEarned(): number {
        let distance: number = this._map.plotBfs(this._xPosition, this._yPosition, "Warehouse", this._map);
        let multiplier: number = 1;
        if(distance!==-1&&distance<6){
            multiplier = 2;
        }
        if(this._buildingAge>=5){
            return this.finalRevenue*multiplier;
        }
        return this._buildingAge*1000000*multiplier;
    }

    /**
     * Factory pollution
     * @returns Pollution generated in one month
     */    
    public pollutionGenerated(): number {
        return this._pollution;
    }

    /**
     * Factory maintenance cost lost
     * @returns Maintenance cost in one month
     */
    public maintenanceLost(): number {
        if(this._buildingAge>=this.months){
            return this.finalMaintenance;
        }
        return this._buildingAge*100000;
    }
    static override isBuildable(x: number, y: number, map: Map) : List<string> {
        let problems : List<string> = new List<string>();
        if(!map.searchRange(x, y, "Power Plant", 6, map.plotBfs)){ problems.push("Power Plant") }

        return problems;
    }
    public fullyFunctional(): List<string> {
        let problems : List<string> = new List<string>();

        if(!this._map.searchRange(this._xPosition, this._yPosition, "Power Plant", 6, this._map.plotBfs)){ problems.push("Power Plant") }

        return problems;
    }    
    public static checkCost(money : number) : boolean {
        return Factory.buildCost <= money;
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
        this._powerGeneration = 0;

        this.finalMaintenance = 3000000;
        this.months = 0;
        this.finalRevenue = 0;

        this._xPosition = x;
        this._yPosition = y;
        this._image = new Image();
        this._image.src = "../src/assets/environmental-facility-image.png"
    }
    public override updateMonth(): void {
        this._buildingAge+=1;
    }

    /**
     * Environmental facility pollution reduced
     * @returns Pollution reduced in one month
     */
    public pollutionReduced(): number{
        // retrun the polluton grid
        return this._reversePollution;
    }

    /**
     * Environmental facility pollution generated
     * @returns Pollution generated in one month
     */
    public override pollutionGenerated(): number {
        return this._pollution;
    }
    
    /**
     * Environmental facility revenue 
     * @returns Revenue earned in one month
     */
    public override revenueEarned(): number {
        return this._revenue;
    }

    /**
     * Environmental facility maintenance cost 
     * @returns Maintenance cost lost in one month
     */
    public override maintenanceLost(): number {
        return this._maintenaceCost;
    }
    static override isBuildable(x: number, y: number, map: Map): List<string> {
        let problems : List<string> = new List<string>();
        if(!map.searchRange(x, y, "Power Plant", 6, map.plotBfs)){ problems.push("Power Plant") }

        return problems;
    }
    public fullyFunctional(): List<string> {
        let problems : List<string> = new List<string>();
        
        if(!this._map.searchRange(this._xPosition, this._yPosition, "Power Plant", 6, this._map.plotBfs)){ problems.push("Power Plant") }

        return problems;
    }  

    public static checkCost(money : number) : boolean {
        return EnvironmentalFacility.buildCost <= money;
    }
}


export class Warehouse extends Industrial{
    static override buildCost: number = 10000000;
    static override buildingName: string = "Warehouse";

    public constructor(x : number, y : number, map : Map){
        super(Warehouse.buildingName, Warehouse.buildCost, map);

        this._revenue = 0;
        this._maintenaceCost = 500000;
        this._powerCost = 10;
        this._pollution = 0;
        this._reversePollution = 0;
        this._powerGeneration = 0;

        this.finalMaintenance = 500000;
        this.months = 0;
        this.finalRevenue = 0;

        this._xPosition = x;
        this._yPosition = y;

        this._image = new Image();
        this._image.src = "../src/assets/warehouse-image.png"
    }

    public override updateMonth(): void {
        this._buildingAge += 1;
    }

    public static checkCost(money : number) : boolean {
        return Warehouse.buildCost <= money;
    }

    /**
     * Warehouse revenue
     * @returns Revenue earned in one month
     */
    public override revenueEarned(): number {
        return this._revenue;
    }

    /**
     * Warehouse pollution
     * @returns Pollution generated in one month
     */
    public override pollutionGenerated(): number {
        return this._maintenaceCost;
    }

    /**
     * Warehouse maintenance cost
     * @returns Maintenance cost lost in one month
     */
    public override maintenanceLost(): number {
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