import CalendarControlsButton from "@/lib/components/Calendar/CalendarControlsButton";
import CalendarControlsLabel from "@/lib/components/Calendar/CalendarControlsLabel";

export type CalenderControlsProps = {
    onGoForwardsClick: () => void;
    onGoBackwardsClick: () => void;
    dateFrom: Date;
    dateTo: Date;
}

export default function CalendarControls({ onGoForwardsClick, onGoBackwardsClick, dateFrom, dateTo }: CalenderControlsProps) {
    return (
        <div className="flex">
            <CalendarControlsButton direction="backward" onClick={onGoBackwardsClick} />
            <CalendarControlsLabel dateFrom={dateFrom} dateTo={dateTo} />
            <CalendarControlsButton direction="forward" onClick={onGoForwardsClick} />
        </div>
    );
}