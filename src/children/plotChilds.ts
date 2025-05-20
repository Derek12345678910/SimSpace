import { Map } from "../objects/map"
import { Plot } from "../objects/plot";

import { List } from "../datastructures/list";

export class PlanetaryDefenseSystem extends Plot{
    static override buildCost: number = 1000000000000;
    static override buildingName: string = "Planetary Defense System";

    public constructor(x : number, y : number, map : Map){
        super(PlanetaryDefenseSystem.buildingName, PlanetaryDefenseSystem.buildCost, map);
        this._xPosition = x;
        this._yPosition = y;

    }

    public override updateMonth(): void {
        
    }

    static checkCost(money : number) : boolean {
        return PlanetaryDefenseSystem.buildCost <= money;
    }
    
    static override isBuildable(x: number, y: number, map: Map) : List<string> {
        let problems : List<string> = new List<string>();
        return problems;
    }
    public fullyFunctional(): List<string> {
        let problems : List<string> = new List<string>();
        return problems;
    }    

}