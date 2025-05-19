import { GlobalEvent } from "../objects/globalevents"

export class AlienInvasion extends GlobalEvent{
    static override eventChance: number = 0.01

    public constructor(date : number){
        super(date);
        this._populationWipeout = Infinity;
    }

    static override checkEvent(): boolean {
        if(GlobalEvent.randomChance(100) === this.eventChance * 100){
            return true;
        }
        return false;
    }

}

export class Asteroid extends GlobalEvent{
    static override eventChance: number = 0.01

    public constructor(date : number){
        super(date);
        this._populationWipeout = Infinity;
    }

    static override checkEvent(): boolean {
        if(GlobalEvent.randomChance(100) === this.eventChance * 100){
            return true;
        }
        return false;
    }

}