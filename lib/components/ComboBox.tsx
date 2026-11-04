import React, {type ButtonHTMLAttributes, useEffect, useRef, useState} from "react";
import ChevronDown from "@/lib/icons/ChevronDown";
import classNames from "@/lib/utils/classNames";
import Checkbox from "@/lib/components/Checkbox";

export type OptionProps = {
    id: number;
    value: string;
    label: string;
    checked: boolean;
    name: string;
}

export type OnOptionChange = (id: number, checked: boolean) => void;

export type ListBoxOptionsProps = {
    options: OptionProps[];
    onOptionChange: OnOptionChange;
}

export type ComboBoxProps = {
    label: string;
    children?: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    onClickOutside?: () => void;
};

export type ComboboxTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
    open?: boolean;
};

export function ListBoxOptions({ options, onOptionChange }: ListBoxOptionsProps) {
    const items = options.map(option =>
        <div
            key={option.id}
            role="option"
            aria-selected="false"
        >
            <Checkbox
                value={option.value}
                name={option.name}
                label={option.label}
                checked={option.checked}
                onChange={(checked) => onOptionChange(option.id, checked)}
            />
        </div>
    );
    return (
        <div className="min-h-24 max-h-[25dvh] pr-4 overflow-auto">
            {items}
        </div>
    );
}

export function ComboboxTrigger(
    { id = "", className = "", type = "button", disabled = false, onClick, label, open = false, ...props }: ComboboxTriggerProps
) {
    return (
        <button
            {...props}
            id={id}
            type={type}
            className={classNames(className, "border border-muted-foreground rounded-lg h-11 px-4 flex items-center justify-between w-full max-w-44 bg-background")}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
            <ChevronDown
                ariaHidden={true}
                className={classNames("text-foreground", open ? "rotate-180" : "")}
            />
        </button>
    );
}

export default function ComboBox({ label, children, open, onOpenChange, onClickOutside }: ComboBoxProps) {

    const comboBoxRef = useRef<HTMLDivElement>(null);

    // Closes the combobox when clicking outside it.
    useEffect(() => {
        const clickOutsideHandler = (e: PointerEvent) => {
            if (comboBoxRef.current && !comboBoxRef.current.contains(e.target as Node)) {
                onOpenChange?.(false);
                onClickOutside?.();
            }
        };
        document.addEventListener('pointerup', clickOutsideHandler)
        return () => {
            document.removeEventListener('pointerup', clickOutsideHandler);
        }
    }, []);

    return (
        <div ref={comboBoxRef}>
            <div className="relative">
                <ComboboxTrigger label={label} open={open} onClick={() => onOpenChange?.(!open)} />
                <div
                    id="listbox-meeting-rooms"
                    role="listbox"
                    aria-labelledby="select-meeting-room"
                    className={classNames("bg-background border border-muted-foreground rounded-lg pt-4 px-4 absolute top-full my-1 w-full max-w-80 drop-shadow-lg", open ? "block" : "hidden")}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
