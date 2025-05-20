import { Essential } from "../objects/essential";
import { Map } from "../objects/map";

import { List } from "../datastructures/list";

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
    public constructor(x: number, y: number, map : Map){
        super(PowerPlant.buildingName, PowerPlant.buildCost, map);

        this._maintenaceCost = 2000000;
        this._powerCost = 0;
        this._powerGeneration = 100;

        this._xPosition = x;
        this._yPosition = y;

    }
    public override updateMonth(): void {
        
    }
    static override checkCost(money: number): boolean {
        return PowerPlant.buildCost <= money;
    }
    public override updateMonth(): void {
       
    }
    static override checkCost(money: number): boolean {
        return PowerPlant.buildCost <= money;
    }
    /**
     * Power Plant revenue
     * @returns Revenue earned in one month
     */
    public override revenueEarned(): number {
        return super.revenueEarned();
    }
    
    /**
     * Power Plant pollution
     * @returns Pollution generated in one month
     */
    public override pollutionGenerated(): number {
        return super.pollutionGenerated();
    }

    /**
     * Power Plant maintenance cost 
     * @returns Maintenance cost lost in one month
     */
    public maintenanceLost(): number {
        return this._maintenaceCost;
    }
    static override isBuildable(x: number, y: number, map: Map): List<string> {
        let problems : List<string> = new List<string>();
        return problems;
    }
    protected override fullyFunctional(): List<string> {
        let problems : List<string> = new List<string>();
        return problems;
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
    public constructor(x: number, y: number, map : Map){
        super(EmergencyService.buildingName, EmergencyService.buildCost, map);

        this._maintenaceCost = 1000000;
        this._powerCost = 10;
        this._powerGeneration = 0;

        this._xPosition = x;
        this._yPosition = y;

    }
    public override updateMonth(): void {
        
    }

    /**
     * Emergency Service revenue
     * @returns Revenue earned in one month
     */
    public override revenueEarned(): number {
        return super.revenueEarned();
    }

    /**
     * Emergency Service pollution
     * @returns Pollution generated in one month
     */
    public override pollutionGenerated(): number {
        return super.pollutionGenerated();
    }

    /**
     * Power Plant maintenance cost
     * @returns Maintenance cost lost in one month
     */
    public maintenanceLost(): number {
        return this._maintenaceCost;
    }
    static override isBuildable(x: number, y: number, map: Map): List<string> {
        let problems : List<string> = new List<string>();
        return problems;
    }
    protected override fullyFunctional(): List<string> {
        let problems : List<string> = new List<string>();
        return problems;
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
    public constructor(x: number, y: number, map : Map){
        super(EducationCentre.buildingName, EducationCentre.buildCost, map);

        this._maintenaceCost = 50000000;
        this._powerCost = 15;
        this._powerGeneration = 0;

        this._xPosition = x;
        this._yPosition = y;

    }
    public override updateMonth(): void {
        
    }

    /**
     * Education Centre revenue
     * @returns Revenue earned in one month
     */
    public override revenueEarned(): number {
        return super.revenueEarned();
    }

    /**
     * Education Cenre pollution
     * @returns Pollution generated in one month
     */
    public override pollutionGenerated(): number {
        return super.pollutionGenerated();
    }

    /**
     * Education Centre maintenance
     * @returns Maintenance cost lost in one month
     */
    public maintenanceLost(): number {
        return this._maintenaceCost;
    }
    static override isBuildable(x: number, y: number, map: Map): List<string> {
        let problems : List<string> = new List<string>();
        return problems;
    }
    protected override fullyFunctional(): List<string> {
        let problems : List<string> = new List<string>();
        return problems;
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
    public constructor(x: number, y: number, map : Map){
        super(Medical.buildingName, Medical.buildCost, map);

        this._maintenaceCost = 150000000;
        this._powerCost = 20;
        this._powerGeneration = 0;

        this._xPosition = x;
        this._yPosition = y;

    }
    public override updateMonth(): void {
        
    }

    /**
     * Medical Facility revenue
     * @returns Revenue earned in one month
     */
    public override revenueEarned(): number {
        return super.revenueEarned();
    }

    /**
     * Medical Facility pollution
     * @returns Pollution generated in one month
     */
    public override pollutionGenerated(): number {
        return super.pollutionGenerated();
    }

    /**
     * Medical Facility maintenance cost
     * @returns Maintenance cost lost in one month
     */
    public maintenanceLost(): number {
        return this._maintenaceCost;
    }
    static override isBuildable(x: number, y: number, map: Map): List<string> {
        let problems : List<string> = new List<string>();
        return problems;
    }
    protected override fullyFunctional(): List<string> {
        let problems : List<string> = new List<string>();
        return problems;
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
    public constructor(x: number, y: number, map : Map){
        super(Government.buildingName, Government.buildCost, map);

        this._maintenaceCost = 1000000;
        this._powerCost = 10;
        this._powerGeneration = 0;

        this._xPosition = x;
        this._yPosition = y;

    }
    public override updateMonth(): void {
        
    }

    /**
     * Government Facility revenue
     * @returns Revenue earned in one month
     */
    public override revenueEarned(): number {
        return super.revenueEarned();
    }

    /**
     * Government Facility pollution
     * @returns Pollution generated in one month
     */
    public override pollutionGenerated(): number {
        return super.pollutionGenerated();
    }

    /**
     * Government Facility maintenance cost
     * @returns Maintenance cost lost in one month
     */
    public maintenanceLost(): number {
        return this._maintenaceCost;
    }
    static override isBuildable(x: number, y: number, map: Map): List<string> {
        let problems : List<string> = new List<string>();
        return problems;
    }
    protected override fullyFunctional(): List<string> {
        let problems : List<string> = new List<string>();
        return problems;
    }      
}