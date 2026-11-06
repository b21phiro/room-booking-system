import Button from "@/lib/components/Button";
import React from "react";
import { StepProps } from "@/lib/components/MultiStepForm/StepProps";

export type FormStepProps = StepProps & {
    step: number;
    onNext: () => void;
    valid: boolean;
    children: React.ReactNode;
}

export default function FormStep({ current, step, title, children, onNext, valid }: FormStepProps) {
    if (step !== current) return null;
    return (
        <div className="flex-1 min-h-0 flex flex-col">
            <div className="flex-1 min-h-0 pt-4 flex flex-col gap-8 pb-8">
                <h1 id="step-title-1" className="text-4xl">
                    {title}
                </h1>
                {children}
            </div>
            <Button type="button" disabled={!valid} onClick={onNext}>
                Nästa
            </Button>
        </div>
    );
}