import classNames from "@/lib/utils/classNames";
import { AvailableRoom } from "@/lib/hooks/client/useBookings";

export type CalendarColumnItemProps = {
    active?: boolean;
    availableRoom: AvailableRoom;
    onClick: () => void;
};

const timeFormatter = new Intl.DateTimeFormat("sv-SE", {
    hour: "2-digit",
    minute: "2-digit",
});

export default function CalendarColumnItem({ active = false, availableRoom, onClick }: CalendarColumnItemProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={classNames('cursor-pointer text-left border border-action-border p-2 rounded text-sm leading-tight', active ? 'bg-action text-foreground-text' : '')}
        >
            <p>{availableRoom.room.name}</p>
            <p>{timeFormatter.format(availableRoom.from)}-{timeFormatter.format(availableRoom.to)}</p>
        </button>
    );
}
