import { Plot } from "./plot";
import { Map } from "./map"

export abstract class Land extends Plot{
    protected constructor(name: string, buildCost : number, map : Map){
        super(name, buildCost, map);
    }
}