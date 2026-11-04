import { useState } from "react";

export type RoomProp = {
    id: number;
    value: string;
    label: string;
    name: string;
    checked: boolean;
}

export type OnRoomChange = (id: number, checked: boolean) => void;

export function useRooms() {

    const [ rooms, setRooms ] = useState<RoomProp[]>([
        {
            id: 0,
            value: "margret",
            label: "Margret (67 personer)",
            name: "room",
            checked: false,
        },
        {
            id: 1,
            value: "steve",
            label: "Steve (6 personer)",
            name: "room",
            checked: false,
        },
        {
            id: 2,
            value: "ada",
            label: "Ada (10 personer)",
            name: "room",
            checked: false,
        },
        {
            id: 3,
            value: "edmund",
            label: "Edmund (10 personer)",
            name: "room",
            checked: false,
        },
        {
            id: 4,
            value: "grace",
            label: "Grace (20 personer)",
            name: "room",
            checked: false,
        },
    ]);

    const selectedAmount = rooms.filter(room => room.checked).length;

    const handleSelectRoomChange: OnRoomChange = (id: number, checked: boolean) => {
        setRooms(prev =>
            prev.map(room =>
                room.id === id
                    ? { ...room, checked }
                    : room));
    };

    const handleUnselectAll = () => {
        setRooms(prev =>
            prev.map(room =>
                ({ ...room, checked: false })));
    };

    return {
        rooms,
        selectRoom: handleSelectRoomChange,
        selectedAmount,
        unSelectAll: handleUnselectAll,
        anySelected: selectedAmount > 0,
    };
}