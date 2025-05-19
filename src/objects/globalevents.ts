export abstract class GlobalEvent{

    static eventChance : number; 

    protected _populationWipeout : number;

    protected _date : number;

    protected constructor(date : number){
        this._date = date;
    }

    public get populationWipeout() : number{
        return this._populationWipeout;
    }

    public get date() : number{
        return this._date;
    }

    static randomChance(max : number) : number{
        return Math.floor((Math.random() * max) + 1);
    }

    static checkEvent() : boolean {
        return true;
    }

}