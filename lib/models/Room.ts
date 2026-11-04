export class Room {

    private _id: number;
    public get id(): number { return this._id; }

    public name: string;
    public capacity: number;

    public constructor(id: number, name: string, capacity: number) {
        this._id = id;
        this.name = name;
        this.capacity = capacity;
    }

}