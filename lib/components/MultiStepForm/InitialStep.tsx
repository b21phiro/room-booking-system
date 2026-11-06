import Button from "@/lib/components/Button";
import React from "react";
import {StepProps} from "@/lib/components/MultiStepForm/StepProps";

export type InitialStepProps = StepProps & {
    onBegin: () => void;
}

export default function InitialStep({ current, onBegin, title }: InitialStepProps) {
    if (current !== 0) return null;
    return (
        <div className="flex-1 flex flex-col pt-32">
            <div className="flex-1">
                <h1 id="step-title-0" className="text-7xl">
                    { title }
                </h1>
            </div>
            <Button type="button" onClick={onBegin}>
                Boka
            </Button>
        </div>
    );
}