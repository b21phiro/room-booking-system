'use client'
import React, { useState } from "react";
import ComboBox, { ListBoxOptions, OnOptionChange, OptionProps } from "@/lib/components/ComboBox";
import Button from "@/lib/components/Button";
import { useRooms } from "@/lib/hooks/client/useRooms";

export default function StepForm() {

    const [ step, setStep ] = useState(0);
    const { rooms, selectRoom, selectedAmount, unSelectAll, anySelected } = useRooms();

    const [ showRoomsLabel, setShowRoomsLabel ] = useState("Mötesrum");
    const [ showRoomsComboboxOpen, setShowRoomsComboboxOpen ] = useState(false);

    const handleRoomSelection = () => {
        setShowRoomsComboboxOpen(false);
        if (selectedAmount == 1) {
            setShowRoomsLabel(`1 rum valt`);
        } else if (selectedAmount > 1) {
            setShowRoomsLabel(`${selectedAmount} rum valda`);
        } else {
            setShowRoomsLabel("Mötesrum");
        }
    };

    return (
        <form className="flex-1 flex">
            <div className={step === 0 ? 'flex-1 flex flex-col pt-32' : 'hidden'}>
                <div className="flex-1">
                    <h1 id="step-title-0" className="text-7xl">Boka ett rum</h1>
                </div>
                <Button type="button" onClick={() => setStep(1)}>
                    Boka
                </Button>
            </div>
            <div className={step === 1 ? 'flex-1 flex flex-col' : 'hidden'}>
                <div className="flex-1 pt-20 flex flex-col gap-8">
                    <h1 id="step-title-1" className="text-4xl">Välj en tid</h1>
                    <ComboBox
                        open={showRoomsComboboxOpen}
                        onOpenChange={setShowRoomsComboboxOpen}
                        label={showRoomsLabel}
                    >
                        <ListBoxOptions options={rooms} onOptionChange={selectRoom} />
                        <div className="flex gap-2 my-4">
                            <Button onClick={handleRoomSelection}>Välj</Button>
                            <Button onClick={unSelectAll} disabled={!anySelected}>Avmarkera</Button>
                        </div>
                    </ComboBox>
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
