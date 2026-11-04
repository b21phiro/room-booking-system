import {BookingSchema} from "@/lib/db/schemas/BookingSchema";

export class Booking {

    private _id: number;
    public get id(): number { return this._id; }

    private _room: number;
    public get room(): number { return this._room; }

    private _fromDate: Date;
    public get fromDate(): Date { return this._fromDate; }

    private _toDate: Date;
    public get toDate(): Date { return this._toDate; }

    private _firstName: string;
    public get firstName(): string { return this._firstName; }

    private _surName: string;
    public get surName(): string { return this._surName; }

    public get fullName(): string {
        return this.firstName + ' ' + this.surName;
    }

    public constructor(schema: BookingSchema) {
        this._id = schema.id;
        this._room = schema.room;
        this._fromDate = new Date(schema.from_date);
        this._toDate = new Date(schema.to_date);
        this._firstName = schema.firstname;
        this._surName = schema.surname;
    }

}