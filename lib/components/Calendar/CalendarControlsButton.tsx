import type { ButtonHTMLAttributes } from "react";
import CircleArrowRight from "@/lib/icons/CircleArrowRight";
import CircleArrowLeft from "@/lib/icons/CircleArrowLeft";

export type CalendarControlsButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    direction: "backward" | "forward";
};

export default function CalendarControlsButton({ direction = "forward" }: CalendarControlsButtonProps) {
    return (
        <button
            type="button"
            className="size-8 inline-flex items-center justify-center hover:bg-foreground/10 rounded active:translate-y-px"
        >
            {direction === "forward" ? <CircleArrowRight className="text-foreground" /> : <CircleArrowLeft className="text-foreground" />}
        </button>
    );
}