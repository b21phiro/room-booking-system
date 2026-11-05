import CalendarControls, { CalenderControlsProps } from "@/lib/components/Calendar/CalendarControls";
import CalendarContent from "@/lib/components/Calendar/CalendarContent";
import { AvailableRoom } from "@/lib/hooks/client/useBookings";

export type CalendarProps = CalenderControlsProps & {
    availableRooms: AvailableRoom[];
}

export default function Calendar({ onGoForwardsClick, onGoBackwardsClick, dateFrom, dateTo, availableRooms } : CalendarProps) {
    return (
        <div className="flex flex-col flex-1 min-h-0 gap-4">
            <CalendarControls
                onGoForwardsClick={onGoForwardsClick}
                onGoBackwardsClick={onGoBackwardsClick}
                dateFrom={dateFrom}
                dateTo={dateTo}
            />
            <div className="flex flex-col flex-1 min-h-0 border border-muted-foreground rounded-lg">
                <CalendarContent dateFrom={dateFrom} dateTo={dateTo} availableRooms={availableRooms} />
            </div>
        </div>
    );
}
