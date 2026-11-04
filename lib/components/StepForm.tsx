'use client'
import { useState } from "react";

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
        <form>
            <div className={step === 0 ? 'block' : 'hidden'}>
                <h1>Boka ett rum</h1>
                <StepButton type="button" text="Boka" onClick={() => setStep(1)} />
            </div>
            <div className={step === 1 ? 'block' : 'hidden'}>
                <h1>Välj en tid</h1>
                <StepButton type="button" text="Nästa" onClick={() => setStep(2)} />
            </div>
            <div className={step === 2 ? 'block' : 'hidden'}>
                <h1>Vem bokar?</h1>
                <StepButton type="submit" text="Boka" />
            </div>
        </form>
    );

}
