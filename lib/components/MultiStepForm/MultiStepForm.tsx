'use client'
import React, { useMemo, useState } from "react";
import ComboBox from "@/lib/components/ComboBox/ComboBox";
import Button from "@/lib/components/Button";
import SuccessAlert from "@/lib/components/Alerts/SuccessAlert";
import FailAlert from "@/lib/components/Alerts/FailAlert";
import FormStep from "@/lib/components/MultiStepForm/FormStep";
import InitialStep from "@/lib/components/MultiStepForm/InitialStep";
import FinalStep from "@/lib/components/MultiStepForm/FinalStep";
import ListBoxOptions from "@/lib/components/ComboBox/ListBoxOptions";
import { useRooms } from "@/lib/hooks/client/useRooms";
import { Room } from "@/lib/data/room";
import { Bookings } from "@/lib/components/Bookings";
import { AvailableRoom, getAvailableRoomId } from "@/lib/hooks/client/useBookings";
import { makeBooking } from "@/lib/actions";

export type StepFormProps = {
    rooms: Room[];
}

export default function MultiStepForm({ rooms }: StepFormProps) {

    const [ step, setStep ] = useState(0);
    const { getRooms, selectRoom, selectedAmount, unSelectAll, anySelected } = useRooms({ rooms });
    const lastStep = 2;

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
            <form className="flex-1 min-h-0 flex md:p-4 w-full md:max-h-[72vh] md:rounded-2xl md:border md:border-muted-foreground md:bg-background md:shadow max-w-[48rem] md:m-auto" onSubmit={handleSubmit}>
                <input type="hidden" name="room" value={selectedTime?.room.id ?? ''} />
                <input type="hidden" name="from" value={selectedTime?.from.toISOString() ?? ''} />
                <input type="hidden" name="to" value={selectedTime?.to.toISOString() ?? ''} />
                <InitialStep
                    current={step}
                    onBegin={() => setStep(1)}
                    title="Boka ett rum"
                />
                <FormStep
                    current={step}
                    onNext={() => setStep(2)}
                    title="Välj en tid"
                    step={1}
                    valid={selectedTime !== null}
                >
                    <ComboBox
                        open={showRoomsComboboxOpen}
                        onOpenChange={setShowRoomsComboboxOpen}
                        label={showRoomsLabel}
                    >
                        <ListBoxOptions
                            options={getRooms}
                            onOptionChange={selectRoom}
                        />
                        <div className="flex gap-2 my-4">
                            <Button onClick={handleRoomSelection}>
                                Välj
                            </Button>
                            <Button onClick={unSelectAll} disabled={!anySelected}>
                                Avmarkera
                            </Button>
                        </div>
                    </ComboBox>
                    <div className="flex flex-col flex-1 min-h-0">
                        <Bookings
                            rooms={roomsForBookings}
                            selectedTime={selectedTime}
                            onSelectTime={handleSelectTime}
                        />
                    </div>
                </FormStep>
                <FinalStep
                    current={step}
                    title="Vem bokar?"
                    valid={selectedTime != null && fullname !== ""}
                    last={lastStep}
                >
                    <label className="flex flex-col">
                        <span className="font-medium text-xl">
                            Förnamn och efternamn
                        </span>
                        <input className="border border-muted-foreground p-2 px-4 rounded-lg mt-2 text-lg"
                               type="text"
                               name="fullname"
                               placeholder="Skriv ditt fullständiga namn här"
                               value={fullname}
                               onChange={(ev) => setFullname(ev.target.value)}
                        />
                    </label>
                </FinalStep>
            </form>
        </>
    );

}
