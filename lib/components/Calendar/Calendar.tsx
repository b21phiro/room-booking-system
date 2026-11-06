import CalendarControls, { CalenderControlsProps } from "@/lib/components/Calendar/CalendarControls";
import CalendarContent from "@/lib/components/Calendar/CalendarContent";
import { AvailableRoom } from "@/lib/hooks/client/useBookings";

export type CalendarProps = CalenderControlsProps & {
    availableRooms: AvailableRoom[];
    selectedTime: AvailableRoom | null;
    onSelectTime: (availableRoom: AvailableRoom) => void;
}

export default function Calendar({ onGoForwardsClick, onGoBackwardsClick, dateFrom, dateTo, availableRooms, selectedTime, onSelectTime } : CalendarProps) {
    return (
        <div className="flex flex-col flex-1 min-h-0 gap-4">
            <CalendarControls
                onGoForwardsClick={onGoForwardsClick}
                onGoBackwardsClick={onGoBackwardsClick}
                dateFrom={dateFrom}
                dateTo={dateTo}
            />
            <div className="flex flex-col flex-1 min-h-0 border border-muted-foreground rounded-lg">
                <CalendarContent
                    dateFrom={dateFrom}
                    dateTo={dateTo}
                    availableRooms={availableRooms}
                    selectedTime={selectedTime}
                    onSelectTime={onSelectTime}
                />
            </div>
        </div>
    );
}
