'use server'
import RoomBookingDB from "@/lib/db/RoomBookingDB";

export async function checkConnection() {
    const db = RoomBookingDB.getInstance();
    db.connect();
    return { message: "Healthy!" };
}