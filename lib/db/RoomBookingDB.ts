import Database from 'better-sqlite3';
import { Room } from "@/lib/models/Room";
import { Booking } from "@/lib/models/Booking";

export default class RoomBookingDB {

    private _db;

    public static instance: RoomBookingDB;

    private constructor() {
        this._db = new Database('room_booking_db.db');
    }

    public static getInstance(): RoomBookingDB {
        if (!RoomBookingDB.instance) {
            RoomBookingDB.instance = new RoomBookingDB();
        }
        return RoomBookingDB.instance;
    }

}