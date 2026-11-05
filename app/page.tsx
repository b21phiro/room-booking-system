import StepForm from "@/lib/components/StepForm";
import { getAllRooms } from "@/lib/data/room";
import { Suspense } from "react";
import { useBookings } from "@/lib/hooks/client/useBookings";

export default async function Home() {

    const rooms = await getAllRooms();

    return (
        <>
            <Suspense>
                <StepForm rooms={rooms} />
            </Suspense>
        </>
    );
}
