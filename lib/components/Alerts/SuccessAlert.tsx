import React from "react";
import FaceSmile from "@/lib/icons/FaceSmile";

export default function SuccessAlert({ onResume }: { onResume: () => void }) {
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