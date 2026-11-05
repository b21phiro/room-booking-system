import CalendarControls from "@/lib/components/Calendar/CalendarControls";
import CalendarContent from "@/lib/components/Calendar/CalendarContent";

export default function Calendar() {
    return (
        <div className="flex flex-col flex-1 min-h-0 gap-4">
            <CalendarControls />
            <div className="flex flex-col flex-1 min-h-0 border border-muted-foreground rounded-lg">
                <CalendarContent />
            </div>
        </div>
    );
}
