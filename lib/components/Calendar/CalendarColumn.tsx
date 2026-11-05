import CalendarColumnHead from "@/lib/components/Calendar/CalendarColumnHead";
import CalendarColumnContent from "@/lib/components/Calendar/CalendarColumnContent";
import {AvailableRoom} from "@/lib/hooks/client/useBookings";

export type CalendarColumnProps = {
    date: Date | null;
    availableRooms: AvailableRoom[];
    selectedTime: AvailableRoom | null;
    onSelectTime: (availableRoom: AvailableRoom) => void;
};

export default function CalendarColumn({ date, availableRooms = [], selectedTime, onSelectTime }: CalendarColumnProps) {
    return (
        <div className="flex-1 min-h-0 flex flex-col">
            <CalendarColumnHead date={date} />
            <CalendarColumnContent
                availableRooms={availableRooms}
                selectedTime={selectedTime}
                onSelectTime={onSelectTime}
            />
        </div>
    );
}
