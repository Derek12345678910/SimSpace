import { Commercial } from "../objects/commercial";
import { Map } from "../objects/map";

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
    public constructor(x: number, y: number){
        super(Store.buildingName)

        this._revenue = 200000;
        this._maintenaceCost = 50000;
        this._powerCost = 5;
        this._pollution = 500;

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
    fullyFunctional(map: Map): string {
        return "true"
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
    public constructor(x: number, y: number){
        super(Office.buildingName);

        this._revenue = 20000;
        this._maintenaceCost = 5000;
        this._powerCost = 15;
        this._pollution = 800;

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
    fullyFunctional(map: Map): string {
        return "true"
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
    public constructor(x: number, y: number){
        super(Restaurant.buildingName)

        this._revenue = 10000;
        this._maintenaceCost = 5000;
        this._powerCost = 5;
        this._pollution = 300;
        this._reversePollution = 0;

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


let myStore = new Store(0,0);
console.log(myStore.pollutionGenerated())
console.log(Office)
console.log(Restaurant)