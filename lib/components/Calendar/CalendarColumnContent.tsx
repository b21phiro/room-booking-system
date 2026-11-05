import CalendarColumnItem from "@/lib/components/Calendar/CalendarColumnItem";
import { AvailableRoom } from "@/lib/hooks/client/useBookings";

export type CalendarColumnContentProps = {
        availableRooms: AvailableRoom[];
};

export function CalendarColumnContentItems({ availableRooms }: CalendarColumnContentProps) {

    const items = availableRooms.map((availableRoom) =>
        <CalendarColumnItem
            key={`${availableRoom.room.id}-${availableRoom.from.toISOString()}-${availableRoom.to.toISOString()}`}
            availableRoom={availableRoom}
        />
    );

    return (
        <>
            {items}
        </>
    );
}

export default function CalendarColumnContent({ availableRooms }: CalendarColumnContentProps) {
    return (
        <div className="flex-1 min-h-0 overflow-y-auto p-2 flex flex-col gap-2">
            <CalendarColumnContentItems availableRooms={availableRooms} />
        </div>
    );
}
