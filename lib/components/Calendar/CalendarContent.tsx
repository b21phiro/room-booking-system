import CalendarColumn from "@/lib/components/Calendar/CalendarColumn";
import {getDatesBetween} from "@/lib/utils/date";

export type CalendarContentProps = {
    dateFrom: Date;
    dateTo: Date;
};

function CalendarColumnRange({ dateFrom, dateTo }: CalendarContentProps) {
    const colsBetween = getDatesBetween(dateFrom, dateTo).map((date, i) =>
        <div key={i} className="border-r border-muted-foreground flex min-h-0 flex-col">
            <CalendarColumn date={date} />
        </div>
    );
    return (
        <>
            <div className="border-r border-muted-foreground flex min-h-0 flex-col">
                <CalendarColumn date={dateFrom} />
            </div>
            {colsBetween}
            <div className="flex min-h-0 flex-col">
                <CalendarColumn date={dateTo} />
            </div>
        </>
    );
}

export default function CalendarContent({ dateFrom, dateTo }: CalendarContentProps) {
    return (
        <div className="grid grid-cols-3 flex-1 min-h-0">
            <CalendarColumnRange dateFrom={dateFrom} dateTo={dateTo} />
        </div>
    );
}
