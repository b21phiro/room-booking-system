import { useBookings } from "@/lib/hooks/client/useBookings";
import Calendar from "@/lib/components/Calendar/Calendar";
import useCalendar from "@/lib/hooks/client/useCalendar";
import { Room } from "@/lib/data/room";

export type BookingsProps = {
    rooms: Room[];
}

export function Bookings({ rooms }: BookingsProps) {

    const calendar = useCalendar();
    const bookings = useBookings({ rooms, dateFrom: calendar.dateFrom, dateTo: calendar.dateTo });

    console.log("Available bookings:", bookings.available);

    return (
        <>
            <Calendar
                availableRooms={bookings.available}
                onGoForwardsClick={calendar.goForwards}
                onGoBackwardsClick={calendar.goBackwards}
                dateFrom={calendar.dateFrom}
                dateTo={calendar.dateTo}
            />
        </>
    );

}