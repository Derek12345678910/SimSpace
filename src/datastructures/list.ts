/**
 * Is a dynamic array structure that pushes in O(1) time
 */
export class List<T> {

    private data : T[] = new Array<T>(10);

    // length of the items inside the list
    private _length : number = 0;

    // original start size
    private startSize : number = 10;

    /**
     * Removes the value at the index and shifts the elements into order
     * @param index the index to remove a value at
     */
    public delete(index: number) {
        // halve the size of the array if it is only half full and larger than the startSize
        if (this._length === this.data.length / 2 && this.data.length > this.startSize) {
            let newData: T[] = new Array<T>(Math.floor(this._length / 2));

            for (let i = 0; i < this._length; i++) {
                newData[i] = this.data[i];
            }

            this.data = newData;
        }
        // shift values after index to the left
        for (let i = index; i < this._length; i++) {
            this.data[i] = this.data[i + 1];
        }

        this._length--;
    }

    /**
     * Pushes a value to the end of the list in Amortized O(1) time
     * @param val value to be pushed to the end of the list
     */
    public push(val: T) : void {
        if (this._length === this.data.length) {
            let newData: T[] = new Array<T>(this._length * 2);

            for (let i = 0; i < this._length; i++) {
                newData[i] = this.data[i];
            }

            this.data = newData;
        }
        this.data[this._length] = val;
        this._length++;
    }

    /**
     * @returns the length of the List
     */
    public get length(){
        return this._length;
    }

    /**
     * Replaces a value for a new one at the given index
     * @param val value to be replacing with
     * @param index index of the value to be replaced
     */
    public replace(val: T, index: number): void {
        if (index < 0 || index >= this._length) return;
        this.data[index] = val;
    }

    /**
     * Inserts a value at the given index
     * @param val value to be inserted
     * @param index index that value is inserted at
     */
    public insert(val: T, index: number) : void {
        if (this._length === this.data.length) {
            let newData: T[] = new Array<T>(this._length * 2);

            for (let i = 0; i < this._length; i++) {
                newData[i] = this.data[i];
            }

            this.data = newData;
        }
        // shift values after index to the right
        for (let i = this._length; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }

        this.data[index] = val;

        this._length++;
    }

    /**
     * Returns a value at the given index
     * @param index the index in the list
     * @returns the value at that index
     */
    public get(index: number): T | null {
        // if index is not in the list
        if (index < 0 || index >= this._length) return null;
        return this.data[index];
    }
    
}