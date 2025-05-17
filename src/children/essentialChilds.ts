import { Essential } from "../objects/essential";
import { Map } from "../objects/map";

/**
 * Power Plant, type of essential facility
 */
export class PowerPlant extends Essential{
    static override buildingName: string = "Power Plant";
    static override buildCost: number = 500000000;
    
    /**
     * Constructs a power plant building
     * @param x X coordinate of the power plant
     * @param y Y coordinate of the power plant
     */
    public constructor(x: number, y: number){
        super(PowerPlant.buildingName);

        this._maintenaceCost = 2000000;
        this._powerCost = 0;
        this._powerGeneration = 100;

        this._xPosition = x;
        this._yPosition = y;

    }
    public override revenueEarned(): number {
        return super.revenueEarned();
    }
    public override pollutionGenerated(): number {
        return super.pollutionGenerated();
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

/**
 * Emergency Service, type of essential facility
 */
export class EmergencyService extends Essential{
    static override buildingName: string = "Emergency Service Facility";
    static override buildCost: number = 100000000;
    
    /**
     * Constructs an emergency service building
     * @param x X coordinate of the emergency service facility
     * @param y Y coordinate of the emergency service facility
     */
    public constructor(x: number, y: number){
        super(PowerPlant.buildingName);

        this._maintenaceCost = 1000000;
        this._powerCost = 10;
        this._powerGeneration = 0;

        this._xPosition = x;
        this._yPosition = y;

    }
    public override revenueEarned(): number {
        return super.revenueEarned();
    }
    public override pollutionGenerated(): number {
        return super.pollutionGenerated();
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

/**
 * Education Centre, type of essential facility
 */
export class EducationCentre extends Essential{
    static override buildingName: string = "Education Centre";
    static override buildCost: number = 500000000;
    
    /**
     * Constructs an education centre building
     * @param x X coordinate of the education centre
     * @param y Y coordinate of the education centre
     */
    public constructor(x: number, y: number){
        super(EducationCentre.buildingName);

        this._maintenaceCost = 50000000;
        this._powerCost = 15;
        this._powerGeneration = 0;

        this._xPosition = x;
        this._yPosition = y;

    }
    public override revenueEarned(): number {
        return super.revenueEarned();
    }
    public override pollutionGenerated(): number {
        return super.pollutionGenerated();
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

/**
 * Medical Facilty, type of essential facility
 */
export class Medical extends Essential{
    static override buildingName: string = "Medical Facility";
    static override buildCost: number = 1000000000;
    
    /**
     * Constructs a medical building
     * @param x X coordinate of the medical facility
     * @param y Y coordinate of the medical facility
     */
    public constructor(x: number, y: number){
        super(Medical.buildingName);

        this._maintenaceCost = 150000000;
        this._powerCost = 20;
        this._powerGeneration = 0;

        this._xPosition = x;
        this._yPosition = y;

    }
    public override revenueEarned(): number {
        return super.revenueEarned();
    }
    public override pollutionGenerated(): number {
        return super.pollutionGenerated();
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

/**
 * Government Facility, type of essential facility
 */
export class Government extends Essential{
    static override buildingName: string = "Government Facility";
    static override buildCost: number = 100000000;
    
    /**
     * Constructs a government building
     * @param x X coordinate of the government facility
     * @param y Y coordinate of the government facility
     */
    public constructor(x: number, y: number){
        super(Medical.buildingName);

        this._maintenaceCost = 1000000;
        this._powerCost = 10;
        this._powerGeneration = 0;

        this._xPosition = x;
        this._yPosition = y;

    }
    public override revenueEarned(): number {
        return super.revenueEarned();
    }
    public override pollutionGenerated(): number {
        return super.pollutionGenerated();
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