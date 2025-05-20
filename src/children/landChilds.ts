import { Map } from "../objects/map"
import { Land } from "../objects/land"

import { List } from "../datastructures/list";

export class Grass extends Land{
    static override buildCost : number = 0;
    static override buildingName : string = "Grass";

    public constructor(x : number, y : number, map : Map){
        super(Grass.buildingName, Grass.buildCost, map);
        this._xPosition = x;
        this._yPosition = y;
    }

    public override updateMonth(): void {
        
    }

    static checkCost(money : number) : boolean {
        return Grass.buildCost <= money;
    }

    static isBuildable(x : number, y : number, map : Map) : List<string>{
        let problems : List<string> = new List<string>();
        return problems;
    }

    public override fullyFunctional() : List<string>{
        let problems : List<string> = new List<string>();
        return problems;
    }
}

export class Rock extends Land{
    static override buildCost : number = 100;
    static override buildingName : string = "Rock";

    public constructor(x : number, y : number, map : Map){
        super(Rock.buildingName, Rock.buildCost, map);
        this._xPosition = x;
        this._yPosition = y;
    }

    public override updateMonth(): void {
        
    }

    static checkCost(money : number) : boolean {
        return Grass.buildCost <= money;
    }

    static isBuildable(x : number, y : number, map : Map) : List<string>{
        let problems : List<string> = new List<string>();
        return problems;
    }

    public override fullyFunctional() : List<string>{
        let problems : List<string> = new List<string>();
        return problems;
    }
}

export class Tree extends Land{
    static override buildCost : number = 100;
    static override buildingName : string = "Tree";

    public constructor(x : number, y : number, map : Map){
        super(Tree.buildingName, Tree.buildCost, map);
        this._xPosition = x;
        this._yPosition = y;
    }

    public override updateMonth(): void {
        
    }

    static checkCost(money : number) : boolean {
        return Grass.buildCost <= money;
    }

    static isBuildable(x : number, y : number, map : Map) : List<string>{
        let problems : List<string> = new List<string>();
        return problems;
    }

    public override fullyFunctional() : List<string>{
        let problems : List<string> = new List<string>();
        return problems;
    }
}