import CalendarControls from "@/lib/components/Calendar/CalendarControls";
import CalendarContent from "@/lib/components/Calendar/CalendarContent";
import useCalendar from "@/lib/hooks/client/useCalendar";

export default function Calendar() {

    const { goForwards, goBackwards, dateFrom, dateTo } = useCalendar();

    return (
        <div className="flex flex-col flex-1 min-h-0 gap-4">
            <CalendarControls
                onGoForwardsClick={goForwards}
                onGoBackwardsClick={goBackwards}
                dateFrom={dateFrom}
                dateTo={dateTo}
            />
            <div className="flex flex-col flex-1 min-h-0 border border-muted-foreground rounded-lg">
                <CalendarContent />
            </div>
        </div>
    );
}
