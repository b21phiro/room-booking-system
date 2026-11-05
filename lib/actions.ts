'use server'

import db from "@/lib/db";
import { getBookingForRoomNumber } from "@/lib/data/booking";

export type BookingActionState = {
    status: number;
    message: string;
};

export async function makeBooking(_prevState: BookingActionState, formData: FormData): Promise<BookingActionState> {

    const fullname = String(formData.get('fullname')) ?? '';
    const room = Number(formData.get('room')) ?? null;
    const from = String(formData.get('from')) ?? null;
    const to = String(formData.get('to')) ?? null;

    if (!fullname) {
        return { status: 400, message: 'Booking requires your name.' };
    }

    const nameFragments = fullname.split(' ');
    const firstname = nameFragments[0];
    const surname = nameFragments[1];

    if (!firstname || !surname) {
        return { status: 400, message: 'Booking requires your first and last name.' };
    }

    if (room === null || from === null || to === null) {
        return { status: 400, message: 'Invalid booking data' };
    }

    const exists = await getBookingForRoomNumber(room, new Date(from), new Date(to));
    if (exists.length > 0) {
        return { status: 400, message: 'Room already booked for the specified dates' };
    }

    const stmt = db.prepare("INSERT INTO Booking (room, from_date, to_date, firstname, surname) VALUES (?, ?, ?, ?, ?)");
    const result = stmt.run(room, from, to, firstname, surname);

    if (result.changes < 1) {
        return { status: 500, message: 'Failed to make booking' };
    }

    return { status: 200, message: 'Booking made successfully' };
}
