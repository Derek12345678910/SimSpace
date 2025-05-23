import { Plot } from "./plot.js";
import { Map } from "./map.js"

export abstract class Land extends Plot{
    protected constructor(name: string, buildCost : number, map : Map){
        super(name, buildCost, map);
    }
}