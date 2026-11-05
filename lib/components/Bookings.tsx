import { useBookings } from "@/lib/hooks/client/useBookings";
import Calendar from "@/lib/components/Calendar/Calendar";
import useCalendar from "@/lib/hooks/client/useCalendar";
import { Room } from "@/lib/data/room";
import { AvailableRoom } from "@/lib/hooks/client/useBookings";

export type BookingsProps = {
    rooms: Room[];
    selectedTime: AvailableRoom | null;
    onSelectTime: (availableRoom: AvailableRoom) => void;
}

export function Bookings({ rooms, selectedTime, onSelectTime }: BookingsProps) {

    const calendar = useCalendar();
    const bookings = useBookings({ rooms, dateFrom: calendar.dateFrom, dateTo: calendar.dateTo });

    return (
        <>
            <Calendar
                availableRooms={bookings.available}
                onGoForwardsClick={calendar.goForwards}
                onGoBackwardsClick={calendar.goBackwards}
                dateFrom={calendar.dateFrom}
                dateTo={calendar.dateTo}
                selectedTime={selectedTime}
                onSelectTime={onSelectTime}
            />
        </>
    );

}
