import type { IconProps } from "@/lib/icons/IconProps";

export default function CircleArrowLeft({ className = "", ariaHidden = false, ...props }: IconProps) {
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
                d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
                stroke="currentColor"
            />
            <mask
                id="mask0_8_259"
                maskUnits="userSpaceOnUse"
                x="4"
                y="4"
                width="16"
                height="16"
            >
                <path
                    d="M5.29993 5.29999H18.6999V18.7H5.29993V5.29999Z"
                    fill="#D9D9D9"
                    stroke="currentColor"
                />
            </mask>
            <g mask="url(#mask0_8_259)">
                <mask
                    id="stroke0_8_259"
                    fill="white"
                >
                    <path
                        d="M12.0002 16.8L7.2002 12L12.0002 7.20001L12.8552 8.04001L9.4952 11.4H16.8002V12.6H9.4952L12.8552 15.96L12.0002 16.8Z"
                    />
                </mask>
                <path
                    d="M12.0002 16.8L7.2002 12L12.0002 7.20001L12.8552 8.04001L9.4952 11.4H16.8002V12.6H9.4952L12.8552 15.96L12.0002 16.8Z"
                    strokeWidth={2}
                    stroke="currentColor"
                    mask="url(#stroke0_8_259)"
                />
            </g>
        </svg>
    );
}
