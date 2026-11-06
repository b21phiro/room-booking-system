import React from "react";

export type InputProps = {
    label: string;
    value?: string;
    setValue: (value: string) => void;
    name: string;
    placeholder?: string;
};

export default function Input({ label, value, setValue, name, placeholder }: InputProps) {
    return (
        <label className="flex flex-col">
            <span className="font-medium text-xl">
                {label}
            </span>
            <input
                className="border border-muted-foreground p-2 px-4 rounded-lg mt-2 text-lg"
                type="text"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={(ev) => setValue(ev.target.value ?? "")}
            />
        </label>
    );
}