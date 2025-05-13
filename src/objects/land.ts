import { Plot } from "./plot";

export abstract class Land extends Plot{
    public constructor(name : string){
        super(name)
    }
}