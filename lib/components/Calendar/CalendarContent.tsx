import CalendarColumn from "@/lib/components/Calendar/CalendarColumn";

export default function CalendarContent() {

    return (
        <div className="grid grid-cols-3 flex-1 min-h-0">
            <div className="border-r border-muted-foreground flex min-h-0 flex-col">
                <CalendarColumn />
            </div>
            <div className="border-r border-muted-foreground flex min-h-0 flex-col">
                <CalendarColumn />
            </div>
            <div className="flex min-h-0 flex-col">
                <CalendarColumn />
            </div>
        </div>
    );
}
