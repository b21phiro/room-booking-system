import CalendarColumnItem from "@/lib/components/Calendar/CalendarColumnItem";
import { AvailableRoom, getAvailableRoomId } from "@/lib/hooks/client/useBookings";

export type CalendarColumnContentProps = {
    availableRooms: AvailableRoom[];
    selectedTime: AvailableRoom | null;
    onSelectTime: (availableRoom: AvailableRoom) => void;
};

export function CalendarColumnContentItems({ availableRooms, selectedTime, onSelectTime }: CalendarColumnContentProps) {

    const items = availableRooms.map((availableRoom) =>
        <CalendarColumnItem
            key={getAvailableRoomId(availableRoom)}
            availableRoom={availableRoom}
            active={selectedTime ? getAvailableRoomId(selectedTime) === getAvailableRoomId(availableRoom) : false}
            onClick={() => onSelectTime(availableRoom)}
        />
    );

    return (
        <>
            {items}
        </>
    );
}

export default function CalendarColumnContent({ availableRooms, selectedTime, onSelectTime }: CalendarColumnContentProps) {
    return (
        <div className="flex-1 min-h-0 overflow-y-auto p-2 flex flex-col gap-2">
            <CalendarColumnContentItems
                availableRooms={availableRooms}
                selectedTime={selectedTime}
                onSelectTime={onSelectTime}
            />
        </div>
    );
}
