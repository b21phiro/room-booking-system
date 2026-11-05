import {getMonthLabel} from "@/lib/utils/date";

export type CalendarColumnHeadProps = {
  date: Date;
};

export default function CalendarColumnHead({ date = new Date() }: CalendarColumnHeadProps) {

    const dateNumber = date.getDate();
    const monthLabel = getMonthLabel(date.getMonth(), 3);

    return (
        <div className="border-b border-muted-foreground text-center p-2 font-medium">
            {dateNumber} {monthLabel}
        </div>
    );
}