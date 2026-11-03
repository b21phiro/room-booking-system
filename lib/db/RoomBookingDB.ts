import Database from 'better-sqlite3';
import IRoomBookingDatabase from "@/lib/db/IRoomBookingDatabase";

class RoomBookingDB implements IRoomBookingDatabase {

    private _db;

    public static instance: RoomBookingDB;

    private constructor() {
        this._db = new Database('room_booking_db.db');
        console.log('New database instance created!');
    }

    public connect() {
        console.log('Connecting to database...');
    }

    public static getInstance(): RoomBookingDB {
        if (!RoomBookingDB.instance) {
            RoomBookingDB.instance = new RoomBookingDB();
        }
        return RoomBookingDB.instance;
    }

}

export default RoomBookingDB;