'use server'

import db from '@/lib/db';

export type Room = {
    id: number;
    name: string;
    capacity: number;
};

export async function getAllRooms() {
    console.log("Fetching rooms from the database...");
    const stmt = db.prepare('SELECT * FROM Room');
    const rows = stmt.all() as Room[] ?? [];
    console.log(`Fetched ${rows.length} rooms successfully`);
    return rows;
}