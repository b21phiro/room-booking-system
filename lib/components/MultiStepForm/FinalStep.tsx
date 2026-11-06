import { StepProps } from "@/lib/components/MultiStepForm/StepProps";
import Button from "@/lib/components/Button";
import React from "react";

export type FinalStepProps = StepProps & {
    last: number;
    valid: boolean;
    children: React.ReactNode;
};

export default function FinalStep({ current, last, title, children, valid }: FinalStepProps) {
    if (current != last) return null;
    return (
        <div className="flex-1 flex flex-col">
            <div className="flex-1 pt-20 flex flex-col gap-8">
                <h1 id="step-title-2" className="text-4xl">
                    {title}
                </h1>
                {children}
            </div>
            <Button
                type="submit"
                disabled={!valid}
            >
                Boka
            </Button>
        </div>
    );
}