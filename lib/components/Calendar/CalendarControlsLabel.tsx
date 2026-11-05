import { getMonthLabel } from "@/lib/utils/date";

export type CalenderControlsLabelProps = {
    dateFrom: Date;
    dateTo: Date;
}

export default function CalendarControlsLabel({ dateFrom, dateTo }: CalenderControlsLabelProps) {

    const fromDayNumber = dateFrom.getDate();
    const fromMonthLabel = getMonthLabel(dateFrom.getMonth(), 3);

    const toDayNumber = dateTo.getDate();
    const toMonthLabel = getMonthLabel(dateTo.getMonth(), 3);

    return (
        <p className="flex-1 flex items-center justify-center">{fromDayNumber} {fromMonthLabel}  - {toDayNumber} {toMonthLabel}</p>
    );
}