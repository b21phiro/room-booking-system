'use server'

import db from "@/lib/db";
import { getBookingForRoomNumber } from "@/lib/data/booking";
import { isFullName } from "@/lib/utils/fullname";

export type BookingActionState = {
    status: number;
    message: string;
};

export async function makeBooking(formData: FormData): Promise<BookingActionState> {

    const person = String(formData.get('fullname')) ?? '';
    const room = Number(formData.get('room')) ?? null;
    const from = String(formData.get('from')) ?? null;
    const to = String(formData.get('to')) ?? null;

    if (!person || !isFullName(person)) {
        return { status: 400, message: 'Booking requires your full name.' };
    }

    if (room === null || from === null || to === null) {
        return { status: 400, message: 'Invalid booking data' };
    }

    const exists = await getBookingForRoomNumber(room, new Date(from), new Date(to));
    if (exists && exists.length > 0) {
        return { status: 400, message: 'Room already booked for the specified dates' };
    }

    try {
        const stmt = db.prepare("INSERT INTO Booking (room, from_date, to_date, person) VALUES (?, ?, ?, ?)");
        const result = stmt.run(room, from, to, person);
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
