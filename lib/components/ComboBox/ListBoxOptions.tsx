import Checkbox from "@/lib/components/Checkbox";

export type OptionProps = {
    id: number;
    value: string;
    label: string;
    checked: boolean;
    name: string;
}

export type OnOptionChange = (id: number, checked: boolean) => void;

export type ListBoxOptionsProps = {
    options: OptionProps[];
    onOptionChange: OnOptionChange;
}

export default function ListBoxOptions({ options, onOptionChange }: ListBoxOptionsProps) {
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
                checked={option.checked}
                onChange={(checked) => onOptionChange(option.id, checked)}
            />
        </div>
    );
    return (
        <div className="min-h-24 max-h-[25dvh] pr-4 overflow-auto">
            {items}
        </div>
    );
}