'use client'
import { useState } from "react";
import { Room } from "@/lib/data/room";

export type RoomProps = Room & {
    value: string;
    label: string;
    checked: boolean;
}

export type UseRoomsProps = {
    rooms: Room[];
}

export type OnRoomChange = (id: number, checked: boolean) => void;

export function useRooms({ rooms }: UseRoomsProps) {

    const [ getRooms, setRooms ] = useState<RoomProps[]>(rooms.map(room => ({ ...room, checked: false, label: `${room.name} (${room.capacity} personer)`, value: room.id.toString() })));

    const selectedAmount = getRooms.filter(room => room.checked).length;

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

    const handleRefetch = () => {

    }

    return {
        getRooms,
        selectRoom: handleSelectRoomChange,
        selectedAmount,
        unSelectAll: handleUnselectAll,
        anySelected: selectedAmount > 0,
    };
}
