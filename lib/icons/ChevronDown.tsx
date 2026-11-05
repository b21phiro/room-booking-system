import type { IconProps } from "@/lib/icons/IconProps";

export default function ChevronDown({ className = "", ariaHidden = false, ...props }: IconProps) {
    return (
        <svg
            width={15}
            height={8}
            viewBox="0 0 15 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden={ariaHidden}
            {...props}
        >
            <path
                d="M1.06067 1.06067L7.06067 7.06067L13.0607 1.06067"
                strokeWidth={1.5}
                strokeLinecap="square"
                strokeLinejoin="round"
                stroke="currentColor"
            />
        </svg>
    );
}
