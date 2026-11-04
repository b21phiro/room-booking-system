import { useEffect, useRef, useState } from "react";
import ChevronDown from "@/lib/icons/ChevronDown";
import classNames from "@/lib/utils/classNames";

export default function ComboBox() {

    let [ isOpen, setIsOpen ] = useState(false);
    let comboBoxRef = useRef<HTMLDivElement>(null);

    // Closes the combobox when clicking outside it.
    useEffect(() => {

        const clickOutsideHandler = (e: PointerEvent) => {
            if (comboBoxRef.current && !comboBoxRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('pointerup', clickOutsideHandler)

        return () => {
            document.removeEventListener('pointerup', clickOutsideHandler);
        }

    }, []);

    return (
        <div ref={comboBoxRef}>
            <div className="relative">
                <button
                    type="button"
                    id="select-meeting-room"
                    role="combobox"
                    aria-expanded={isOpen}
                    aria-controls="listbox-meeting-rooms"
                    aria-haspopup="listbox"
                    className="border border-muted-foreground rounded-lg h-11 px-4 flex items-center justify-between w-full max-w-44 bg-background"
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    Mötesrum
                    <ChevronDown
                        ariaHidden={true}
                        className={classNames("text-foreground", isOpen ? "rotate-180" : "")}
                    />
                </button>
                <div
                    id="listbox-meeting-rooms"
                    role="listbox"
                    aria-labelledby="select-meeting-room"
                    className={classNames("bg-background border border-muted-foreground rounded-lg p-4 absolute top-full my-1 w-full max-w-80 drop-shadow-lg", isOpen ? "block" : "hidden")}
                >
                    <div
                        id="listbox-meeting-rooms-0"
                        role="option"
                        aria-selected="false"
                    >
                        Rum 1
                    </div>
                    <div
                        id="listbox-meeting-rooms-1"
                        role="option"
                        aria-selected="false"
                    >
                        Rum 2
                    </div>
                    <div
                        id="listbox-meeting-rooms-2"
                        role="option"
                        aria-selected="false"
                    >
                        Rum 3
                    </div>
                </div>
            </div>
        </div>
    );
}
