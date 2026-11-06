import { getMonthLabel } from "@/lib/utils/date";

export type CalenderControlsLabelProps = {
    dateFrom: Date | null;
    dateTo: Date | null;
}

export default function CalendarControlsLabel({ dateFrom, dateTo }: CalenderControlsLabelProps) {

    const fromDayNumber = dateFrom?.getDate() ?? "Unknown";
    const fromMonthLabel = dateFrom ? getMonthLabel(dateFrom.getMonth(), 3) : "Unknown";

    const toDayNumber = dateTo?.getDate() ?? "Unknown";
    const toMonthLabel = dateTo ? getMonthLabel(dateTo.getMonth(), 3) : "Unknown";

    return (
        <p className="flex-1 flex items-center justify-center">{fromDayNumber} {fromMonthLabel}  - {toDayNumber} {toMonthLabel}</p>
    );
}