import CalendarColumnHead from "@/lib/components/Calendar/CalendarColumnHead";
import CalendarColumnContent from "@/lib/components/Calendar/CalendarColumnContent";

export default function CalendarColumn() {
    return (
        <div className="flex-1 min-h-0 flex flex-col">
            <CalendarColumnHead />
            <CalendarColumnContent />
        </div>
    );
}
