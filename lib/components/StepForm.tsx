'use client'
import { useState } from "react";
import ComboBox from "@/lib/components/ComboBox";

function StepButton({ text, onClick, type = 'button' }: { text: string, onClick?: () => void, type: 'button' | 'submit' }) {
    return (
        <button
            className="bg-foreground text-foreground-text rounded-2xl p-3 w-full cursor-pointer active:translate-y-px"
            type={type}
            onClick={() => onClick?.()}
        >
            {text}
        </button>
    );
}

export default function StepForm() {

    const [step, setStep] = useState(0);

    return (
        <form className="flex-1 flex">
            <div className={step === 0 ? 'flex-1 flex flex-col pt-32' : 'hidden'}>
                <div className="flex-1">
                    <h1 id="step-title-0" className="text-7xl">Boka ett rum</h1>
                </div>
                <StepButton type="button" text="Boka" onClick={() => setStep(1)} />
            </div>
            <div className={step === 1 ? 'flex-1 flex flex-col' : 'hidden'}>
                <div className="flex-1 pt-20 flex flex-col gap-8">
                    <h1 id="step-title-1" className="text-4xl">Välj en tid</h1>
                    <ComboBox />
                </div>
                <StepButton type="button" text="Nästa" onClick={() => setStep(2)} />
            </div>
            <div className={step === 2 ? 'flex-1 flex flex-col' : 'hidden'}>
                <div className="flex-1 pt-20">
                    <h1 id="step-title-2" className="text-4xl">Vem bokar?</h1>
                </div>
                <StepButton type="submit" text="Boka" />
            </div>
        </form>
    );

}
