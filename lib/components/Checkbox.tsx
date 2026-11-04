import {useEffect, useState} from "react";
import Checkmark from "@/lib/icons/Checkmark";

export type CheckboxProps = {
    value: string | number;
    name: string;
    label: string;
    onChange?: (value: boolean) => void
};

export default function Checkbox({ name, value, label, onChange }: CheckboxProps) {

    let [isChecked, setChecked] = useState(false);

    useEffect(() => {
        onChange?.(isChecked);
    }, [isChecked]);

    return (
        <label className="flex items-center justify-between py-1">
            <input
                className="hidden"
                type="checkbox"
                name={name}
                value={value}
                checked={isChecked}
                onChange={() => setChecked(!isChecked)}
            />
            {label}
            <span
                className="inline-flex items-center justify-center border border-faint-foreground rounded-xs size-5"
                aria-hidden={true}
            >
                <Checkmark ariaHidden={true} className={isChecked ? 'block' : 'hidden'} />
            </span>
        </label>
    );
}