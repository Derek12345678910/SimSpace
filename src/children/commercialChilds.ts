import { Commercial } from "../objects/commercial.js";
import { Map } from "../objects/map.js";

import { List } from "../datastructures/list.js";

/**
 * Store, type of commercial facility
 */
export class Store extends Commercial{
    static override buildCost: number = 2000000;
    static override buildingName: string = "Store";
    /**
     * Constructs a store building
     * @param x X coordinate of the store
     * @param y Y coordinate of the store
     */
    public constructor(x: number, y: number, map : Map){
        super(Store.buildingName, Store.buildCost, map)

        this._revenue = 200000;
        this._maintenaceCost = 50000;
        this._powerCost = 5;
        this._pollution = 500;
        this._powerGeneration = 0;

        this._xPosition = x;
        this._yPosition = y;
        this._image = new Image();
        this._image.src = "../src/assets/store-image.png"
    }

    public override updateMonth(): void {
        this._buildingAge += 1;
    }


    /**
     * Store revenue
     * @returns Revenue earned by store in one month
     */
    public override revenueEarned(): number {
        let distance: number = this._map.typeBfs(this._xPosition, this._yPosition, "Residential", this._map);
        if(distance>6){
            return (6/distance)*this._revenue;
        }
        return this._revenue;
    }

    /**
     * Store pollution
     * Adds pollution genreated to the pollution grid
     */
    public override pollutionGenerated(): void {
        let existingPollution = this._map.getPollutionCoord(this._xPosition, this._yPosition);
        if(existingPollution){
            this._map.setPollutionGridCoord(this._xPosition, this._yPosition, this._pollution+existingPollution);
        }
        else{
            this._map.setPollutionGridCoord(this._xPosition, this._yPosition, this._pollution);
        }
    }

    /**
     * Store maintenance
     * @returns Maintenance cost of store in one month
     */
    public override maintenanceLost(): number {
        let distance: number = this._map.typeBfs(this._xPosition, this._yPosition, "Residential", this._map);
        if(distance>6){
            return (6/distance)*this._maintenaceCost;
        }
        return this._maintenaceCost;
    }
    static override isBuildable(x: number, y: number, map: Map): List<string> {
        let problems : List<string> = new List<string>();
        return problems;
    }
    protected override fullyFunctional(): List<string> {
        let problems : List<string> = new List<string>();

        if(!this._map.searchRange(this._xPosition, this._yPosition, "Residential", 6, this._map.typeBfs)){ problems.push("Residential") }

        return problems;
    }
    public static checkCost(money : number) : boolean {
        return Store.buildCost <= money;
    }
}

/**
 * Office, type of commercial facility
 */
export class Office extends Commercial{
    static override buildCost: number = 3000000;
    static override buildingName: string = "Office";
    /**
     * Constructs an office
     * @param x X coordinate of the office
     * @param y Y coordinate of the office
     */
    public constructor(x: number, y: number, map : Map){
        super(Office.buildingName, Office.buildCost, map);

        this._revenue = 20000;
        this._maintenaceCost = 5000;
        this._powerCost = 15;
        this._pollution = 800;
        this._powerGeneration = 0;

        this._xPosition = x;
        this._yPosition = y;
        this._image = new Image();
        this._image.src = "../src/assets/office-image.png"
    }
    public override updateMonth(): void {
        this._buildingAge+=1;
    }

    /**
     * Office revenue
     * @returns Revenue earned by office in one month
     */
    public revenueEarned(): number {
        let distance: number = this._map.typeBfs(this._xPosition, this._yPosition, "Residential", this._map);
        if(distance>6){
            return (6/distance)*this._revenue;
        }
        return this._revenue;
    }

    /**
     * Office pollution
     * Adds the polltion to to pollution grid
     */
    public pollutionGenerated(): void {
        let existingPollution = this._map.getPollutionCoord(this._xPosition, this._yPosition);
        if(existingPollution){
            this._map.setPollutionGridCoord(this._xPosition, this._yPosition, this._pollution+existingPollution);
        }
        else{
            this._map.setPollutionGridCoord(this._xPosition, this._yPosition, this._pollution);
        }
    }

    /**
     * Office maintenance
     * @returns Maintenance cost of office in one month
     */
    public maintenanceLost(): number {
        let distance: number = this._map.typeBfs(this._xPosition, this._yPosition, "Residential", this._map);
        if(distance>6){
            return (6/distance)*this._maintenaceCost;
        }
        return this._maintenaceCost;
    }
    static override isBuildable(x: number, y: number, map: Map): List<string> {
        let problems : List<string> = new List<string>();
        return problems;
    }
    protected override fullyFunctional(): List<string> {
        let problems : List<string> = new List<string>();

        if(!this._map.searchRange(this._xPosition, this._yPosition, "Residential", 6, this._map.typeBfs)){ problems.push("Residential") }

        return problems;
    }
    public static checkCost(money : number) : boolean {
        return Office.buildCost <= money;
    }
}

/**
 * Restaurant, type of commercial facility
 */
export class Restaurant extends Commercial{
    static override buildCost: number = 250000;
    static override buildingName: string = "Restaurant";
    /**
     * Constructs a restaurant
     * @param x X coordinate of the office
     * @param y Y coordinate of the office
     */
    public constructor(x: number, y: number, map : Map){
        super(Restaurant.buildingName, Restaurant.buildCost, map)

        this._revenue = 10000;
        this._maintenaceCost = 5000;
        this._powerCost = 5;
        this._pollution = 300;
        this._reversePollution = 0;
        this._powerGeneration = 0;

        this._xPosition = x;
        this._yPosition = y;
        this._image = new Image();
        this._image.src = "../src/assets/restaurant-image.png"
    }
    public override updateMonth(): void {
        this._buildingAge+=1
    }

    /**
     * Restaraunt revenue
     * @returns Revenue earned by restaurant in one month
     */
    public revenueEarned(): number {
        let distance: number = this._map.typeBfs(this._xPosition, this._yPosition, "Residential", this._map);
        if(distance>6){
            return (6/distance)*this._revenue;
        }
        return this._revenue;
    }

    /**
     * Restaurant pollution
     * Adds the pollution to the pollution grid
     */
    public pollutionGenerated(): void {
        let existingPollution = this._map.getPollutionCoord(this._xPosition, this._yPosition);
        if(existingPollution){
            this._map.setPollutionGridCoord(this._xPosition, this._yPosition, this._pollution+existingPollution);
        }
        else{
            this._map.setPollutionGridCoord(this._xPosition, this._yPosition, this._pollution);
        }
    }

    /**
     * Restaurant maintenance
     * @returns Maintenace cost of restaurant in one month
     */
    public maintenanceLost(): number {
        let distance: number = this._map.typeBfs(this._xPosition, this._yPosition, "Residential", this._map);
        if(distance>6){
            return (6/distance)*this._maintenaceCost;
        }
        return this._maintenaceCost;     
    }
    static override isBuildable(x: number, y: number, map: Map): List<string> {
        let problems : List<string> = new List<string>();
        return problems;
    }
    protected override fullyFunctional(): List<string> {
        let problems : List<string> = new List<string>();

        if(!this._map.searchRange(this._xPosition, this._yPosition, "Residential", 6, this._map.typeBfs)){ problems.push("Residential") }

        return problems;
    }

    public static checkCost(money : number) : boolean {
        return Restaurant.buildCost <= money;
    }

}
