'use server'
import db from '@/lib/db';
import { Room } from "@/lib/data/room";

export type Booking = {
    id: number;
    room: number;
    from_date: string;
    to_date: string;
    person: string;
};

export async function getBookingForRoomNumber(
    room: number,
    dateFrom: Date,
    dateTo: Date
): Promise<Booking[]> {
    const stmt = db.prepare(`
        SELECT *
        FROM Booking
        WHERE room = ?
          AND from_date < ?
          AND to_date > ?
        ORDER BY from_date
    `);
    return stmt.all(
        room,
        dateTo.toISOString(),
        dateFrom.toISOString()
    ) as Booking[];
}

export async function getBookingForRoom(room: Room, dateFrom: Date, dateTo: Date) {
    return await getBookingForRoomNumber(room.id, dateFrom, dateTo);
}

export async function getBookingsForRooms(rooms: Room[], dateFrom: Date, dateTo: Date) {
    const result: Booking[] = [];
    for (const room of rooms) {
        const rows = await getBookingForRoom(room, dateFrom, dateTo);
        result.push(...rows);
    }
    return result;
}
