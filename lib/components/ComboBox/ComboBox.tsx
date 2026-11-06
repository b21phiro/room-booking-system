import React from "react";
import classNames from "@/lib/utils/classNames";
import ComboboxTrigger from "@/lib/components/ComboBox/ComboBoxTrigger";

export type ComboBoxProps = {
    label: string;
    children?: React.ReactNode;
    open?: boolean;
    onOpenChange: (open: boolean) => void;
};

export default function ComboBox({ label, children, open, onOpenChange }: ComboBoxProps) {
    return (
        <>
            <div className="relative z-20">
                <ComboboxTrigger
                    label={label}
                    open={open}
                    onClick={() => onOpenChange?.(!open)}
                />
                <div
                    id="listbox-meeting-rooms"
                    role="listbox"
                    aria-labelledby="select-meeting-room"
                    className={classNames("bg-background border border-muted-foreground rounded-lg pt-4 px-4 absolute top-full my-1 w-full max-w-80 drop-shadow-lg", open ? "block" : "hidden")}
                >
                    {children}
                </div>
            </div>
            {open &&
                <button
                    onClick={() => onOpenChange(false)}
                    className="fixed inset-0 size-full"
                    title="Stäng listan"
                ></button>
            }
        </>
    );
}
