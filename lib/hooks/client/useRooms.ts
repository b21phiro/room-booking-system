'use client'
import {useEffect, useState} from "react";
import {getAllRooms, Room } from "@/lib/room";

export type RoomProp = Room & {
    value: string;
    label: string;
    checked: boolean;
}

export type OnRoomChange = (id: number, checked: boolean) => void;

export function useRooms() {

    const [ rooms, setRooms ] = useState<RoomProp[]>([]);

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

    // Fetches rooms initially from the database.
    useEffect(() => {
        const fetchRooms = () => {
            getAllRooms().then(_rooms => {
                setRooms(_rooms.map(room => ({ ...room, checked: false, label: `${room.name} (${room.capacity} personer)`, value: room.id.toString() })));
            });
        };
        fetchRooms();
    }, []);

    return {
        rooms,
        selectRoom: handleSelectRoomChange,
        selectedAmount,
        unSelectAll: handleUnselectAll,
        anySelected: selectedAmount > 0,
    };
}