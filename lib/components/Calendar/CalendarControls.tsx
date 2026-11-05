import CalendarControlsButton from "@/lib/components/Calendar/CalendarControlsButton";
import CalendarControlsLabel from "@/lib/components/Calendar/CalendarControlsLabel";

export default function CalendarControls() {
    return (
        <div className="flex">
            <CalendarControlsButton direction="backward" />
            <CalendarControlsLabel />
            <CalendarControlsButton direction="forward" />
        </div>
    );
}