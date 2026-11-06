import Calendar from "@/lib/components/Calendar/Calendar";
import { AvailableRoom } from "@/lib/hooks/client/useBookings";

export type BookingsProps = {
    available: AvailableRoom[];
    goForwards: () => void;
    goBackwards: () => void;
    dateFrom: Date | null;
    dateTo: Date | null;
    selectedTime: any;
    onSelectTime: any;
}

export function Bookings({ available, selectedTime, onSelectTime, dateTo, dateFrom, goForwards, goBackwards }: BookingsProps) {

    return (
        <>
            <Calendar
                availableRooms={available}
                onGoForwardsClick={goForwards}
                onGoBackwardsClick={goBackwards}
                dateFrom={dateFrom}
                dateTo={dateTo}
                selectedTime={selectedTime}
                onSelectTime={onSelectTime}
            />
        </>
    );

}
