/**
 * A 2D plane of values
 */
export class Matrix<T>{ 
    private data : Array<Array<T | null>>;

    private xLength : number;
    private yLength : number;

    /**
     * Creates a matrix data structure
     * @param xLength the size of the x component
     * @param yLength the size of the y component
     * @param initialValue the initial values of the matrix (cannot be an object)
     */
    public constructor(xLength : number,  yLength : number, initialValue : T | null){
        this.data = new Array<Array<T>>(yLength);
        for(let i=0; i<yLength; i++){
            this.data[i] = new Array<T>(xLength);
            for(let j=0; j<xLength; j++){
                this.data[i][j] = initialValue;
            }
        }
        this.xLength = xLength;
        this.yLength = yLength;
    }

    /**
     * Get a coord in the matrix
     * @param x row index
     * @param y column index
     * @returns value at coordinate
     */
    public getCoord(x: number, y: number): T | null {
        if(x >= 0 && x < this.xLength && y >= 0 && y < this.yLength){
            return this.data[y][x];
        }
        return null;
    }

    /**
     * Set a coord in the matrix
     * @param x row index
     * @param y column index
     * @param value value to set
     */
    public setCoord(x: number, y: number, value: T): void {
        if(x >= 0 && x < this.xLength && y >= 0 && y < this.yLength){
            this.data[y][x] = value;
        }
    }

    /**
     * Gets a row in the matrix
     * @param col index of column
     * @returns an Array which represents the row in the matrix
     */
    public getRow(col : number) : Array<T> | null {
        if(col >= 0 && col < this.yLength){
            return this.data[col] as Array<T>;
        }
        return null;
    }

}