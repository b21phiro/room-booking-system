import type { IconProps } from "@/lib/icons/IconProps";

export default function CircleArrowRight({ className = "", ariaHidden = false, ...props }: IconProps) {
    return (
        <svg width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
             className={className}
             aria-hidden={ariaHidden}
             {...props}
        >
            <path
                d="M0.5 12C0.5 18.3513 5.64873 23.5 12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12Z"
                stroke="currentColor"
            />
            <mask
                id="mask0_8_265"
                maskUnits="userSpaceOnUse"
                x="4"
                y="4"
                width="16"
                height="16"
            >
                <path
                    d="M18.7002 5.29999H5.30019V18.7H18.7002V5.29999Z"
                    fill="#D9D9D9"
                    stroke="currentColor"
                />
            </mask>
            <g mask="url(#mask0_8_265)">
                <mask
                    id="stroke0_8_265"
                    fill="white"
                >
                    <path
                        d="M11.9998 16.8L16.7998 12L11.9998 7.20001L11.1448 8.04001L14.5048 11.4H7.1998V12.6H14.5048L11.1448 15.96L11.9998 16.8Z"
                    />
                </mask>
                <path
                    d="M11.9998 16.8L16.7998 12L11.9998 7.20001L11.1448 8.04001L14.5048 11.4H7.1998V12.6H14.5048L11.1448 15.96L11.9998 16.8Z"
                    strokeWidth={2}
                    stroke="currentColor"
                    mask="url(#stroke0_8_265)"
                />
            </g>
        </svg>
    );
}
