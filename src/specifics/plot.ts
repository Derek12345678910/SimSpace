import { Map } from "../objects/map"
import { Plot } from "../objects/plot";

export class PlanetaryDefenseSystem extends Plot{
    static override buildCost: number = 1000000000000;
    static override buildingName: string = "Planetary Defense System";

    public constructor(x : number, y : number){
        super(PlanetaryDefenseSystem.buildingName);
        this._xPosition = x;
        this._yPosition = y;
    }

    static checkCost(money : number) : boolean {
        return PlanetaryDefenseSystem.buildCost <= money;
    }
    
    static isBuildable(x : number, y : number, map : Map) : string{
        return "Success";
    }

    public override fullyFunctional(map : Map) : string{
        return "Success"
    }

}