import { List } from "./list"

/**
 * Queue data structure using a List
 */
export class Queue<T> {

    private data: List<T> = new List<T>();

    // length of queue
    private _length: number = 0;

    /**
     * Enqueue a value into the queue
     * @param arg value to be added to the queue
     */
    public enqueue(arg: T): void {
        this.data.push(arg);
        this._length++;
    }

    /**
     * Returns the element at the front of the queue
     * @returns returns the front element of the queue
     */
    public dequeue(): T | null {
        if (this.isEmpty()) return null;
        let front: T | null = this.data.get(0);
        this.data.delete(0);
        this._length--;
        return front;
    }

    /**
     * Looks at the front element of the queue
     * @returns the front element of the queue
     */
    public peek(): T | null {
        return this.data.get(0);
    }

    /**
     * Checks if the queue is empty
     * @returns if the queue is empty
     */
    public isEmpty(): boolean {
        return this._length == 0 ? true : false;
    }

    /**
     * @returns the length of the queue
     */
    public get length() : number {
        return this._length;
    }

}