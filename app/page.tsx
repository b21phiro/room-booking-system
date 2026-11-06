import MultiStepForm from "@/lib/components/MultiStepForm/MultiStepForm";
import { getAllRooms } from "@/lib/data/room";

export default async function Home() {
    const rooms = await getAllRooms();
    return (
        <main className="h-dvh md:bg-muted-foreground flex flex-col px-4 py-8">
            <MultiStepForm rooms={rooms} />
        </main>
    );
}
