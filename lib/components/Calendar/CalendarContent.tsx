import CalendarColumn from "@/lib/components/Calendar/CalendarColumn";
import {getDatesBetween} from "@/lib/utils/date";
import {AvailableRoom} from "@/lib/hooks/client/useBookings";

export type CalendarContentProps = {
    dateFrom: Date | null;
    dateTo: Date | null;
    availableRooms: AvailableRoom[];
    selectedTime: AvailableRoom | null;
    onSelectTime: (availableRoom: AvailableRoom) => void;
};

function isSameDate(dateA: Date, dateB: Date) {
    return dateA.getFullYear() === dateB.getFullYear()
        && dateA.getMonth() === dateB.getMonth()
        && dateA.getDate() === dateB.getDate();
}

function getAvailableRoomsForDate(date: Date | null, availableRooms: AvailableRoom[]) {
    if (!date) return [];
    return availableRooms.filter(availableRoom => isSameDate(availableRoom.from, date));
}

function CalendarColumnRange({ dateFrom, dateTo, availableRooms, selectedTime, onSelectTime }: CalendarContentProps) {
    const colsBetween = (dateFrom && dateTo) ? getDatesBetween(dateFrom, dateTo).map((date, i) =>
        <div key={i} className="border-r border-muted-foreground flex min-h-0 flex-col">
            <CalendarColumn
                date={date}
                availableRooms={getAvailableRoomsForDate(date, availableRooms)}
                selectedTime={selectedTime}
                onSelectTime={onSelectTime}
            />
        </div>
    ) : null;
    return (
        <>
            <div className="border-r border-muted-foreground flex min-h-0 flex-col">
                <CalendarColumn
                    date={dateFrom}
                    availableRooms={getAvailableRoomsForDate(dateFrom, availableRooms)}
                    selectedTime={selectedTime}
                    onSelectTime={onSelectTime}
                />
            </div>
            {colsBetween}
            <div className="flex min-h-0 flex-col">
                <CalendarColumn
                    date={dateTo}
                    availableRooms={getAvailableRoomsForDate(dateTo, availableRooms)}
                    selectedTime={selectedTime}
                    onSelectTime={onSelectTime}
                />
            </div>
        </>
    );
}

export default function CalendarContent({ dateFrom, dateTo, availableRooms = [], selectedTime, onSelectTime }: CalendarContentProps) {
    return (
        <div className="grid grid-cols-3 flex-1 min-h-0">
            <CalendarColumnRange
                dateFrom={dateFrom}
                dateTo={dateTo}
                availableRooms={availableRooms}
                selectedTime={selectedTime}
                onSelectTime={onSelectTime}
            />
        </div>
    );
}
