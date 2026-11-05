import {getMonthLabel} from "@/lib/utils/date";

export type CalendarColumnHeadProps = {
  date: Date | null;
};

export default function CalendarColumnHead({ date = new Date() }: CalendarColumnHeadProps) {

    const dateNumber = date?.getDate() ?? "Unknown";
    const monthLabel = date ? getMonthLabel(date.getMonth(), 3) : "Unknown";

    return (
        <div className="border-b border-muted-foreground text-center p-2 font-medium">
            {dateNumber} {monthLabel}
        </div>
    );
}