import { Commercial } from "../objects/commercial";
import { Map } from "../objects/map";

import { List } from "../datastructures/list";

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

        this._xPosition = x;
        this._yPosition = y;
    }
    public override updateMonth(): void {
        
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
    static override isBuildable(x: number, y: number, map: Map): List<string> {
        let problems : List<string> = new List<string>();
        return problems;
    }
    protected override fullyFunctional(): List<string> {
        let problems : List<string> = new List<string>();

        if(!this._map.searchRange(this._xPosition, this._yPosition, "Residential", 6, this._map.typeBfs)){ problems.push("Residential") }

        return problems;
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

        this._xPosition = x;
        this._yPosition = y;
    }
    public override updateMonth(): void {
        
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
    static override isBuildable(x: number, y: number, map: Map): List<string> {
        let problems : List<string> = new List<string>();
        return problems;
    }
    protected override fullyFunctional(): List<string> {
        let problems : List<string> = new List<string>();

        if(!this._map.searchRange(this._xPosition, this._yPosition, "Residential", 6, this._map.typeBfs)){ problems.push("Residential") }

        return problems;
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

        this._xPosition = x;
        this._yPosition = y;
         
    }
    public override updateMonth(): void {
        
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
    static override isBuildable(x: number, y: number, map: Map): List<string> {
        let problems : List<string> = new List<string>();
        return problems;
    }
    protected override fullyFunctional(): List<string> {
        let problems : List<string> = new List<string>();

        if(!this._map.searchRange(this._xPosition, this._yPosition, "Residential", 6, this._map.typeBfs)){ problems.push("Residential") }

        return problems;
    }
}
