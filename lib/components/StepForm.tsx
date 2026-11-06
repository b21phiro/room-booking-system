'use client'
import React, { useMemo, useState } from "react";
import ComboBox, { ListBoxOptions } from "@/lib/components/ComboBox";
import Button from "@/lib/components/Button";
import { useRooms } from "@/lib/hooks/client/useRooms";
import { Room } from "@/lib/data/room";
import { Bookings } from "@/lib/components/Bookings";
import { AvailableRoom, getAvailableRoomId } from "@/lib/hooks/client/useBookings";
import { makeBooking } from "@/lib/actions";
import FaceSmile from "@/lib/icons/FaceSmile";

export type StepFormProps = {
    rooms: Room[];
}

export function SuccessAlert({ onResume }: { onResume: () => void }) {
    return (
        <>
            <div className="fixed inset-0 w-dvw h-dvh flex justify-center items-center bg-black/35 shadow">
                <button className="absolute inset-0 size-full bg-black/35" title="Stäng" onClick={onResume}></button>
                <div className="relative z-10 bg-background flex flex-col justify-center items-center py-8 px-12 rounded-2xl gap-4">
                    <p>Ditt rum är bokat!</p>
                    <FaceSmile />
                </div>
            </div>
        </>
    );
}

export function FailAlert({ onResume }: { onResume: () => void }) {
    return (
        <>
            <div className="fixed inset-0 w-dvw h-dvh flex justify-center items-center bg-black/35 shadow">
                <button className="absolute inset-0 size-full bg-black/35" title="Stäng" onClick={onResume}></button>
                <div className="relative z-10 bg-background flex flex-col justify-center items-center py-8 px-12 rounded-2xl gap-4">
                    <p>Det gick inte att boka rummet!</p>
                </div>
            </div>
        </>
    );
}

export default function StepForm({ rooms }: StepFormProps) {

    const [ step, setStep ] = useState(0);
    const { getRooms, selectRoom, selectedAmount, unSelectAll, anySelected } = useRooms({ rooms });

    const [ success, setSuccess ] = useState(false);
    const [ fail, setFail ] = useState(false);

    const [ fullname, setFullname ] = useState("");

    const [ showRoomsLabel, setShowRoomsLabel ] = useState("Mötesrum");
    const [ showRoomsComboboxOpen, setShowRoomsComboboxOpen ] = useState(false);

    const [ selectedRooms, setSelectedRooms ] = useState<Room[]>([]);
    const roomsForBookings = useMemo(
        () => selectedRooms.length > 0 ? selectedRooms : rooms,
        [selectedRooms, rooms]
    );

    const [ selectedTime, setSelectedTime ] = useState<AvailableRoom | null>(null);

    const handleSelectTime = (availableRoom: AvailableRoom) => {
        setSelectedTime(prev =>
            prev && getAvailableRoomId(prev) === getAvailableRoomId(availableRoom)
                ? null
                : availableRoom
        );
    };

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

    const handleSubmit = async (ev: React.SubmitEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        try {
            const response = await makeBooking(formData);
            if (response.status != 200) throw new Error(response.message);
            else setSuccess(true);
        } catch (error) {
            console.error(error);
            setFail(true);
        }
    };

    const handleRestart = () => {
        setStep(0);
        setSelectedTime(null);
        setSelectedRooms([]);
        setSuccess(false);
        setFail(false);
    }

    return (
        <>
            {success && <SuccessAlert onResume={handleRestart} />}
            {fail && <FailAlert onResume={handleRestart} />}
            <form className="flex-1 min-h-0 flex md:p-4 w-full md:rounded-2xl md:border md:border-muted-foreground md:bg-background md:shadow max-w-[768px] md:mx-auto" onSubmit={handleSubmit}>
                <input type="hidden" name="room" value={selectedTime?.room.id ?? ''} />
                <input type="hidden" name="from" value={selectedTime?.from.toISOString() ?? ''} />
                <input type="hidden" name="to" value={selectedTime?.to.toISOString() ?? ''} />
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
                            <Bookings
                                rooms={roomsForBookings}
                                selectedTime={selectedTime}
                                onSelectTime={handleSelectTime}
                            />
                        </div>
                    </div>
                    <Button type="button" disabled={selectedTime === null} onClick={() => setStep(2)}>
                        Nästa
                    </Button>
                </div>
                <div className={step === 2 ? 'flex-1 flex flex-col' : 'hidden'}>
                    <div className="flex-1 pt-20 flex flex-col gap-8">
                        <h1 id="step-title-2" className="text-4xl">Vem bokar?</h1>
                        <label className="flex flex-col">
                            <span className="font-medium text-xl">Förnamn och efternamn</span>
                            <input className="border border-muted-foreground p-2 px-4 rounded-lg mt-2 text-lg"
                                   type="text"
                                   name="fullname"
                                   placeholder="Skriv ditt fullständiga namn här"
                                   value={fullname}
                                   onChange={(ev) => setFullname(ev.target.value)}
                            />
                        </label>
                    </div>
                    <Button type="submit" disabled={selectedTime === null || fullname === ""}>
                        Boka
                    </Button>
                </div>
            </form>
        </>
    );

}
