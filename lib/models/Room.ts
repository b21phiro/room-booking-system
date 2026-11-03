import IRoomBookingDatabase from "@/lib/db/IDatabase";

class Room {

    private _database: IRoomBookingDatabase;

    private static _model: Room;

    private constructor(database: IRoomBookingDatabase) {
        this._database = database;
    }

    public static createModel(database: IRoomBookingDatabase): Room {
        if (!Room._model) {
            Room._model = new Room(database);
        }
        return Room._model;
    }

}

export default Room;