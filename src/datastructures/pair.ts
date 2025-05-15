/**
 * Is a structure that holds two values of any datatype
 */
export class Pair {

    // First value
    private _key : any;
    // Second value
    private _val : any;
    
    /**
     * Creates a Pair datatype
     * @param key the first value in the pair
     * @param val the second value in the pair
     */
    public constructor(key : any, val : any){
        this._key = key;
        this._val = val;
    }

    /**
     * @returns the first value of the pair
     */
    public get key() : any{
        return this._key;
    }

    /**
     * @returns the second value of the pair
     */
    public get val() : any{
        return this._val;
    }

    /**
     * @param key the first value of the pair
     * sets the first value of the pair
     */
    public set key(key : any){
        this._key = key;
    }

    /**
     * @param val the second value of the pair
     * sets the second value of the pair
     */
    public set val(val : any){
        this._val = val;
    }

}