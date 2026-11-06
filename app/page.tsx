import StepForm from "@/lib/components/StepForm";
import { getAllRooms } from "@/lib/data/room";

export default async function Home() {
    const rooms = await getAllRooms();
    return (
        <>
            <StepForm rooms={rooms} />
        </>
    );
}
