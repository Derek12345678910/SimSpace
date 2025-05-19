import { Map } from "../objects/map"
import { Land } from "../objects/land"

export class Grass extends Land{
    static override buildCost : number = 0;
    static override buildingName : string = "Grass";

    public constructor(x : number, y : number, map : Map){
        super(Grass.buildingName, Grass.buildCost, map);
        this._xPosition = x;
        this._yPosition = y;
    }

    static checkCost(money : number) : boolean {
        return Grass.buildCost <= money;
    }

    static isBuildable(x : number, y : number, map : Map) : string{
        return "Success";
    }

    public override fullyFunctional(map : Map) : string{
        return "Success"
    }
}

export class Rock extends Land{
    static override buildCost : number = 0;
    static override buildingName : string = "Rock";

    public constructor(x : number, y : number, map : Map){
        super(Rock.buildingName, Rock.buildCost, map);
        this._xPosition = x;
        this._yPosition = y;
    }

    static checkCost(money : number) : boolean {
        return Grass.buildCost <= money;
    }

    static isBuildable(x : number, y : number, map : Map) : string{
        return "Success";
    }

    public override fullyFunctional(map : Map) : string{
        return "Success"
    }
}

export class Tree extends Land{
    static override buildCost : number = 0;
    static override buildingName : string = "Tree";

    public constructor(x : number, y : number, map : Map){
        super(Tree.buildingName, Tree.buildCost, map);
        this._xPosition = x;
        this._yPosition = y;
    }

    static checkCost(money : number) : boolean {
        return Grass.buildCost <= money;
    }

    static isBuildable(x : number, y : number, map : Map) : string{
        return "Success";
    }

    public override fullyFunctional(map : Map) : string{
        return "Success"
    }
}