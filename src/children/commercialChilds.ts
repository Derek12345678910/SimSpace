import { CommercialFacility } from "../objects/commercial";
import { Map } from "../objects/map";


export class Store extends CommercialFacility{
    static override buildCost: number = 2000000;
    static override buildingName: string = "Store";
    public constructor(x: number, y: number){
        super(Store.buildingName, 50000, 5, 200000, 500, 0)
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


export class Office extends CommercialFacility{
    static override buildCost: number = 3000000;
    static override buildingName: string = "Office";
    public constructor(x: number, y: number){
        super(Restaurant.buildingName, 5000, 15, 20000, 800, 0)
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


export class Restaurant extends CommercialFacility{
    static override buildCost: number = 250000;
    static override buildingName: string = "Restaurant";
    public constructor(x: number, y: number){
        super(Restaurant.buildingName, 5000, 5, 10000, 300, 0)
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