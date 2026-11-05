'use client'

import { useEffect, useState } from "react";
import {Booking, getBookingsForRooms} from "@/lib/data/booking";
import { Room } from "@/lib/data/room";
import { getDaysAhead } from "@/lib/utils/date";

export type UseBookingsProps = {
    rooms: Room[];
    dateFrom: Date | null;
    dateTo: Date | null;
}

export type AvailableRoom = {
    room: Room;
    from: Date;
    to: Date;
};

export function getAvailableRoomId(availableRoom: AvailableRoom) {
    return `${availableRoom.room.id}-${availableRoom.from.toISOString()}-${availableRoom.to.toISOString()}`;
}

const workdayStartHour = 9;
const workdayEndHour = 17;
const defaultDayRange = 3;
const bookingDurationInMinutes = 60;

const getDayRange = (dateFrom: Date, dateTo: Date) => {
    const result: Date[] = [];
    const currentDate = new Date(dateFrom);
    currentDate.setHours(0, 0, 0, 0);

    const lastDate = new Date(dateTo);
    lastDate.setHours(0, 0, 0, 0);

    while (currentDate <= lastDate) {
        result.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return result;
};

const getWorkdayRange = (date: Date) => {
    const from = new Date(date);
    from.setHours(workdayStartHour, 0, 0, 0);

    const to = new Date(date);
    to.setHours(workdayEndHour, 0, 0, 0);

    return { from, to };
};

const addAvailableSlots = (result: AvailableRoom[], room: Room, from: Date, to: Date) => {
    const slotFrom = new Date(from);
    slotFrom.setSeconds(0, 0);

    if (slotFrom.getMinutes() > 0) {
        slotFrom.setHours(slotFrom.getHours() + 1, 0, 0, 0);
    }

    while (slotFrom < to) {
        const slotTo = new Date(slotFrom);
        slotTo.setMinutes(slotTo.getMinutes() + bookingDurationInMinutes);

        if (slotTo > to) return;

        result.push({
            room,
            from: new Date(slotFrom),
            to: slotTo,
        });

        slotFrom.setMinutes(slotFrom.getMinutes() + bookingDurationInMinutes);
    }
};

const getAvailableRooms = (rooms: Room[], bookings: Booking[], dateFrom: Date, dateTo: Date): AvailableRoom[] => {
    const result: AvailableRoom[] = [];
    const days = getDayRange(dateFrom, dateTo);

    for (const room of rooms) {
        const roomBookings = bookings
            .filter(booking => booking.room === room.id)
            .map(booking => ({
                from: new Date(booking.from_date),
                to: new Date(booking.to_date),
            }))
            .sort((bookingA, bookingB) => bookingA.from.getTime() - bookingB.from.getTime());

        for (const day of days) {
            const workday = getWorkdayRange(day);
            let availableFrom = workday.from;

            const overlappingBookings = roomBookings.filter(booking =>
                booking.to > workday.from && booking.from < workday.to
            );

            for (const booking of overlappingBookings) {
                const bookingFrom = booking.from > workday.from ? booking.from : workday.from;
                const bookingTo = booking.to < workday.to ? booking.to : workday.to;

                if (bookingFrom > availableFrom) {
                    addAvailableSlots(result, room, availableFrom, bookingFrom);
                }

                if (bookingTo > availableFrom) {
                    availableFrom = bookingTo;
                }
            }

            if (availableFrom < workday.to) {
                addAvailableSlots(result, room, availableFrom, workday.to);
            }
        }
    }

    return result;
};

export function useBookings({ rooms, dateFrom, dateTo }: UseBookingsProps) {

    const [ available, setAvailable ] = useState<AvailableRoom[]>([]);

    useEffect(() => {
        const fetchBookings = () => {
            if (!rooms || rooms.length === 0) {
                setAvailable([]);
                return;
            }

            const from = dateFrom ?? new Date();
            const to = dateTo ?? getDaysAhead(from, defaultDayRange);

            getBookingsForRooms(rooms, from, to).then(bookings => {
                setAvailable(getAvailableRooms(rooms, bookings, from, to));
            });
        }

        fetchBookings();

    }, [ rooms, dateFrom, dateTo ]);

    return {
        available,
    };

}
