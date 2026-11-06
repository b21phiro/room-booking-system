import classNames from "@/lib/utils/classNames";
import type { ButtonHTMLAttributes } from "react";

export default function Button(
    { id = "", className = "", type = "button", disabled = false, onClick, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>
) {
    return (
        <button
            {...props}
            id={id}
            type={type}
            className={classNames(className, "bg-foreground text-foreground-text rounded-2xl p-3 w-full", disabled ? "opacity-80 cursor-not-allowed" : "cursor-pointer active:translate-y-px")}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
