'use server'
import db from '@/lib/db';
import { Room } from "@/lib/data/room";

export type Booking = {
    id: number;
    room: number;
    from_date: string;
    to_date: string;
    firstName: string;
    surName: string;
};

function getDateKey(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

export async function getAllBookingsByRoom(room: number) {
    const stmt = db.prepare('SELECT * FROM Booking WHERE room = ?');
    const rows = stmt.all([room]) as Booking[] ?? [];
    return rows;
}

export async function getBookingForRoomNumber(room: number, dateFrom: Date, dateTo: Date) {
    const stmt = db.prepare(`
        SELECT *
        FROM Booking
        WHERE room = ?
          AND substr(to_date, 1, 10) >= ?
          AND substr(from_date, 1, 10) <= ?
        ORDER BY from_date
    `);
    const rows = stmt.all([room, getDateKey(dateFrom), getDateKey(dateTo)]) as Booking[] ?? [];
    return rows;
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
