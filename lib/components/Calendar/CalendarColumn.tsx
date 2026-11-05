import CalendarColumnHead from "@/lib/components/Calendar/CalendarColumnHead";
import CalendarColumnContent from "@/lib/components/Calendar/CalendarColumnContent";

export type CalendarColumnProps = {
    date: Date;
};

export default function CalendarColumn({ date }: CalendarColumnProps) {
    return (
        <div className="flex-1 min-h-0 flex flex-col">
            <CalendarColumnHead date={date} />
            <CalendarColumnContent />
        </div>
    );
}
