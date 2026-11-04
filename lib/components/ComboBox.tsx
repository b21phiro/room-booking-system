import { useEffect, useRef, useState } from "react";
import ChevronDown from "@/lib/icons/ChevronDown";
import classNames from "@/lib/utils/classNames";
import Checkbox from "@/lib/components/Checkbox";

export type Option = {
    id: number,
    value: string,
    label: string,
    checked: boolean,
    name: string,
    onChange: (value: boolean) => void,
}

export function ListBoxOptions({ options }: { options: Option[] }) {


    const items = options.map(option =>
        <div
            key={option.id}
            role="option"
            aria-selected="false"
        >
            <Checkbox
                value={option.value}
                name={option.name}
                label={option.label}
                onChange={option.onChange}
            />
        </div>
    );

    return items;

}

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

    const [ options, setOptions ] = useState<Option[]>([
        {
            id: 0,
            value: "margret",
            label: "Margret (67 personer)",
            name: "room",
            checked: false,
            onChange: () => {},
        },
        {
            id: 1,
            value: "steve",
            label: "Steve (6 personer)",
            name: "room",
            checked: false,
            onChange: () => {},
        },
        {
            id: 2,
            value: "ada",
            label: "Ada (10 personer)",
            name: "room",
            checked: false,
            onChange: () => {},
        },
        {
            id: 3,
            value: "edmund",
            label: "Edmund (10 personer)",
            name: "room",
            checked: false,
            onChange: () => {},
        },
        {
            id: 4,
            value: "grace",
            label: "Grace (20 personer)",
            name: "room",
            checked: false,
            onChange: () => {},
        },
    ]);

    useEffect(() => {
        console.log("Options: ", options);
    }, [options]);

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
                    <ListBoxOptions options={options} />
                </div>
            </div>
        </div>
    );
}
