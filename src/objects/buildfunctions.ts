import { Office, Restaurant, Store } from "../children/commercialChilds";
import { EducationCentre, EmergencyService, Government, Medical, PowerPlant } from "../children/essentialChilds";
import { EnvironmentalFacility, Factory, Warehouse } from "../children/industrialChilds";
import { Rock, Tree } from "../children/landChilds";
import { PlanetaryDefenseSystem } from "../children/plotChilds";
import { AffordableHome, ComfortableHome, LuxuryHome } from "../children/residentialChilds";
import { List } from "../datastructures/list";
import { Map } from "./map";


/**
 * Functions to build each type of facility
 */
export class BuildFunction{
    private _map : Map;
    constructor(map: Map){
        this._map = map;
    }

    /**
     * Builds a factory
     * @param x X-coord of factory
     * @param y Y-coord of factory
     * @param money Player's money
     * @returns Any problems why the factory can't be built
     */
    public buildFactory(x: number, y: number, money: number): List<string>{
        this._map.setGridCoord(x,y,new Factory(x,y,this._map));
        let problems: List<string> = Factory.isBuildable(x,y,this._map);
        if(!Factory.checkCost(money)){
            problems.push("Not enough money");
        }
        return problems;
    }
    /**
     * Builds a factory
     * @param x X-coord of environmental facility
     * @param y Y-coord of environmental facility
     * @param money Player's money
     * @returns Any problems why the environmental facility can't be built
     */
    public buildEnvironmentalFacility(x: number, y:number, money: number): List<string>{
        this._map.setGridCoord(x,y,new EnvironmentalFacility(x,y,this._map));
        let problems: List<string> = EnvironmentalFacility.isBuildable(x,y,this._map);
        if(!EnvironmentalFacility.checkCost(money)){
            problems.push("Not enough money");
        }
        return problems;
    }
    /**
     * Builds a warehouse
     * @param x X-coord of warehouse
     * @param y Y-coord of warehouse
     * @param money Player's money
     * @returns Any problems why the warehouse can't be built
     */
    public buildWarehouse(x: number, y:number, money: number): List<string>{
        this._map.setGridCoord(x,y,new Warehouse(x,y,this._map));
        let problems: List<string> = Warehouse.isBuildable(x,y,this._map);
        if(!Warehouse.checkCost(money)){
            problems.push("Not enough money");
        }
        return problems;
    }
    /**
     * Builds a factory
     * @param x X-coord of power plant
     * @param y Y-coord of power plant
     * @param money Player's money
     * @returns Any problems why the power plant can't be built
     */
    public buildPowerPlant(x: number, y:number, money: number): List<string>{
        this._map.setGridCoord(x,y,new PowerPlant(x,y,this._map));
        let problems: List<string> = PowerPlant.isBuildable(x,y,this._map);
        if(!PowerPlant.checkCost(money)){
            problems.push("Not enough money");
        }
        return problems;
    }
    /**
     * Builds an emergency service facility
     * @param x X-coord of emergency service facility
     * @param y Y-coord of emergency service facility
     * @param money Player's money
     * @returns Any problems why the emergency service facility can't be built
     */
    public buildEmergencyService(x: number, y:number, money: number): List<string>{
        this._map.setGridCoord(x,y,new EmergencyService(x,y,this._map));
        let problems: List<string> = EmergencyService.isBuildable(x,y,this._map);
        if(!EmergencyService.checkCost(money)){
            problems.push("Not enough money");
        }
        return problems;
    }
    /**
     * Builds an education centre
     * @param x X-coord of education centre
     * @param y Y-coord of education centre
     * @param money Player's money
     * @returns Any problems why the education centre can't be built
     */
    public buildEducationCentre(x: number, y:number, money: number): List<string>{
        this._map.setGridCoord(x,y,new EducationCentre(x,y,this._map));
        let problems: List<string> = EducationCentre.isBuildable(x,y,this._map);
        if(!EducationCentre.checkCost(money)){
            problems.push("Not enough money");
        }
        return problems;
    }
    /**
     * Builds a medical facility
     * @param x X-coord of medical facility
     * @param y Y-coord of medical facility
     * @param money Player's money
     * @returns Any problems why the medical facility can't be built
     */
    public buildMedicalFacility(x: number, y:number, money: number): List<string>{
        this._map.setGridCoord(x,y,new Medical(x,y,this._map));
        let problems: List<string> = Medical.isBuildable(x,y,this._map);
        if(!Medical.checkCost(money)){
            problems.push("Not enough money");
        }
        return problems;
    }
    /**
     * Builds a government facility
     * @param x X-coord of government facility
     * @param y Y-coord of factory
     * @param money Player's money
     * @returns Any problems why the government facility can't be built
     */
    public buildGovernmentFacility(x: number, y:number, money: number): List<string>{
        this._map.setGridCoord(x,y,new Government(x,y,this._map));
        let problems: List<string> = Government.isBuildable(x,y,this._map);
        if(!Government.checkCost(money)){
            problems.push("Not enough money");
        }
        return problems;
    }
    /**
     * Builds a comfortable home
     * @param x X-coord of comfortable home
     * @param y Y-coord of comfortable home
     * @param money Player's money
     * @returns Any problems why the comfortable home can't be built
     */
    public buildComfortableHome(x: number, y:number, money: number): List<string>{
        this._map.setGridCoord(x,y,new ComfortableHome(x,y,this._map));
        let problems: List<string> = ComfortableHome.isBuildable(x,y,this._map);
        if(!ComfortableHome.checkCost(money)){
            problems.push("Not enough money");
        }
        return problems;
    }
    /**
     * Builds an afforable home
     * @param x X-coord of affordable home
     * @param y Y-coord of affordable home
     * @param money Player's money
     * @returns Any problems why the affordable home can't be built
     */
    public buildAffordableHome(x: number, y:number, money:number): List<string>{
        this._map.setGridCoord(x,y,new AffordableHome(x,y,this._map));
        let problems: List<string> = AffordableHome.isBuildable(x,y,this._map);
        if(!Factory.checkCost(money)){
            problems.push("Not enough money");
        }
        return problems;
    }
    /**
     * Builds a luxury home
     * @param x X-coord of luxury home
     * @param y Y-coord of luxury home
     * @param money Player's money
     * @returns Any problems why the luxury home can't be built
     */
    public buildLuxuryHome(x: number, y:number, money: number): List<string>{
        this._map.setGridCoord(x,y,new LuxuryHome(x,y,this._map));
        let problems: List<string> = LuxuryHome.isBuildable(x,y,this._map);
        if(!Factory.checkCost(money)){
            problems.push("Not enough money");
        }
        return problems;
    }
    /**
     * Builds a restaurant 
     * @param x X-coord of restaurant 
     * @param y Y-coord of restaurant
     * @param money Player's money
     * @returns Any problems why the restaurant can't be built
     */
    public buildRestaurant(x: number, y:number, money: number): List<string>{
        this._map.setGridCoord(x,y,new Restaurant(x,y,this._map));
        let problems: List<string> = Restaurant.isBuildable(x,y,this._map);
        if(!Restaurant.checkCost(money)){
            problems.push("Not enough money");
        }
        return problems;
    }
    /**
     * Builds an office
     * @param x X-coord of office
     * @param y Y-coord of office
     * @param money Player's money
     * @returns Any problems why the office can't be built
     */
    public buildOffice(x: number, y:number, money: number): List<string>{
        this._map.setGridCoord(x,y,new Office(x,y,this._map));
        let problems: List<string> = Office.isBuildable(x,y,this._map);
        if(!Office.checkCost(money)){
            problems.push("Not enough money");
        }
        return problems;
    }
    /**
     * Builds a store
     * @param x X-coord of store
     * @param y Y-coord of store
     * @param money Player's money
     * @returns Any problems why the store can't be built
     */
    public buildStore(x: number, y:number, money: number): List<string>{
        this._map.setGridCoord(x,y,new Store(x,y,this._map));
        let problems: List<string> = Store.isBuildable(x,y,this._map);
        if(!Store.checkCost(money)){
            problems.push("Not enough money");
        }
        return problems;
    }
    /**
     * Builds a tree
     * @param x X-coord of tree
     * @param y Y-coord of tree
     * @param money Player's money
     * @returns Any problems why the tree can't be built
     */
    public buildTree(x: number, y:number, money: number): List<string>{
        this._map.setGridCoord(x,y,new Tree(x,y,this._map));
        let problems: List<string> = Tree.isBuildable(x,y,this._map);
        if(!Tree.checkCost(money)){
            problems.push("Not enough money");
        }
        return problems;
    }
    /**
     * Builds a rock
     * @param x X-coord of rock
     * @param y Y-coord of rock
     * @param money Player's money
     * @returns Any problems why the rock can't be built
     */
    public buildRock(x: number, y:number, money: number): List<string>{
        this._map.setGridCoord(x,y,new Rock(x,y,this._map));
        let problems: List<string> = Rock.isBuildable(x,y,this._map);
        if(!Rock.checkCost(money)){
            problems.push("Not enough money");
        }
        return problems;
    }
    /**
     * Builds a planetary defense system
     * @param x X-coord of planetary defense system
     * @param y Y-coord of planetary defense system
     * @param money Player's money
     * @returns Any problems why the planetary defense system can't be built
     */
    public buildPlanetaryDefenseSystem(x: number, y:number, money: number): List<string>{
        this._map.setGridCoord(x,y,new PlanetaryDefenseSystem(x,y,this._map));
        let problems: List<string> = PlanetaryDefenseSystem.isBuildable(x,y,this._map);
        if(!PlanetaryDefenseSystem.checkCost(money)){
            problems.push("Not enough money");
        }
        return problems;
    }
}