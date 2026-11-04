export default ({ className = "", ariaHidden = false }: { className: string, ariaHidden: boolean }) => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden={ariaHidden}
    >
        <path
            d="M13.3334 4L6.00008 11.3333L2.66675 8"
            strokeWidth="1.5"
            strokeLinecap="square"
            stroke="currentColor"
        />
    </svg>
);