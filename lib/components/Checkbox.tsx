import Checkmark from "@/lib/icons/Checkmark";

export type CheckboxProps = {
    value: string | number;
    name: string;
    label: string;
    checked: boolean;
    onChange?: (value: boolean) => void
};

export default function Checkbox({ name, value, label, checked, onChange }: CheckboxProps) {

    return (
        <label className="flex items-center justify-between py-1">
            <input
                className="hidden"
                type="checkbox"
                name={name}
                value={value}
                checked={checked}
                onChange={(event) => onChange?.(event.target.checked)}
            />
            {label}
            <span
                className="inline-flex items-center justify-center border border-faint-foreground rounded-xs size-5"
                aria-hidden={true}
            >
                <Checkmark ariaHidden={true} className={checked ? 'block' : 'hidden'} />
            </span>
        </label>
    );
}
