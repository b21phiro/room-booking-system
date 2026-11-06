'use server'

import db from "@/lib/db";
import { getBookingForRoomNumber } from "@/lib/data/booking";

export type BookingActionState = {
    status: number;
    message: string;
};

export async function makeBooking(formData: FormData): Promise<BookingActionState> {

    const fullname = String(formData.get('fullname')) ?? '';
    const room = Number(formData.get('room')) ?? null;
    const from = String(formData.get('from')) ?? null;
    const to = String(formData.get('to')) ?? null;

    console.log("BOOKING: ", { fullname, room, from, to })

    if (!fullname) {
        return { status: 400, message: 'Booking requires your name.' };
    }

    console.log("NAME");

    const nameFragments = fullname.split(' ');
    const firstname = nameFragments[0];
    const surname = nameFragments[1];

    if (!firstname || !surname) {
        return { status: 400, message: 'Booking requires your first and last name.' };
    }

    if (room === null || from === null || to === null) {
        return { status: 400, message: 'Invalid booking data' };
    }

    console.log("ASS");

    const exists = await getBookingForRoomNumber(room, new Date(from), new Date(to));
    if (exists && exists.length > 0) {
        return { status: 400, message: 'Room already booked for the specified dates' };
    }

    console.log("DOES NOT EXISTS");

    try {
        const stmt = db.prepare("INSERT INTO Booking (room, from_date, to_date, firstname, surname) VALUES (?, ?, ?, ?, ?)");
        console.log("STMT");
        const result = stmt.run(room, from, to, firstname, surname);
        console.log("RESULT: ", result)
        if (result.changes < 1) {
            console.error('Failed to make booking, no changes made');
            return { status: 500, message: 'Failed to make booking' };
        }
        return { status: 200, message: 'Booking made successfully' };

    } catch (error) {
        console.error("ERROR: ", error);
        return { status: 500, message: 'Failed to make booking' };
    }



}
