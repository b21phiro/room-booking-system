import { ButtonHTMLAttributes } from "react";
import classNames from "@/lib/utils/classNames";
import ChevronDown from "@/lib/icons/ChevronDown";

export type ComboboxTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
    open?: boolean;
};

export default function ComboboxTrigger(
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