'use client'
import React, { useState } from "react";
import ComboBox, { ListBoxOptions } from "@/lib/components/ComboBox";
import Button from "@/lib/components/Button";
import { useRooms } from "@/lib/hooks/client/useRooms";
import { Room } from "@/lib/data/room";
import { Bookings } from "@/lib/components/Bookings";

export type StepFormProps = {
    rooms: Room[];
}

export default function StepForm({ rooms }: StepFormProps) {

    const [ step, setStep ] = useState(0);
    const { getRooms, selectRoom, selectedAmount, unSelectAll, anySelected } = useRooms({ rooms });

    const [ showRoomsLabel, setShowRoomsLabel ] = useState("Mötesrum");
    const [ showRoomsComboboxOpen, setShowRoomsComboboxOpen ] = useState(false);

    const [ selectedRooms, setSelectedRooms ] = useState<Room[]>([]);
    const roomsForBookings = selectedRooms.length > 0 ? selectedRooms : rooms;

    const handleRoomSelection = () => {
        setShowRoomsComboboxOpen(false);
        if (selectedAmount == 1) {
            setShowRoomsLabel(`1 rum valt`);
        } else if (selectedAmount > 1) {
            setShowRoomsLabel(`${selectedAmount} rum valda`);
        } else {
            setShowRoomsLabel("Mötesrum");
        }
        setSelectedRooms(getRooms.filter(room => room.checked));
    };

    return (
        <form className="flex-1 min-h-0 flex">
            <div className={step === 0 ? 'flex-1 flex flex-col pt-32' : 'hidden'}>
                <div className="flex-1">
                    <h1 id="step-title-0" className="text-7xl">Boka ett rum</h1>
                </div>
                <Button type="button" onClick={() => setStep(1)}>
                    Boka
                </Button>
            </div>
            <div className={step === 1 ? 'flex-1 min-h-0 flex flex-col' : 'hidden'}>
                <div className="flex-1 min-h-0 pt-4 flex flex-col gap-8 pb-8">
                    <h1 id="step-title-1" className="text-4xl">Välj en tid</h1>
                    <ComboBox
                        open={showRoomsComboboxOpen}
                        onOpenChange={setShowRoomsComboboxOpen}
                        label={showRoomsLabel}
                    >
                        <ListBoxOptions options={getRooms} onOptionChange={selectRoom} />
                        <div className="flex gap-2 my-4">
                            <Button onClick={handleRoomSelection}>Välj</Button>
                            <Button onClick={unSelectAll} disabled={!anySelected}>Avmarkera</Button>
                        </div>
                    </ComboBox>
                    <div className="flex flex-col flex-1 min-h-0">
                        <Bookings rooms={roomsForBookings} />
                    </div>
                </div>
                <Button type="button" onClick={() => setStep(2)}>
                    Nästa
                </Button>
            </div>
            <div className={step === 2 ? 'flex-1 flex flex-col' : 'hidden'}>
                <div className="flex-1 pt-20">
                    <h1 id="step-title-2" className="text-4xl">Vem bokar?</h1>
                </div>
                <Button type="submit">
                    Boka
                </Button>
            </div>
        </form>
    );

}
