import classNames from "@/lib/utils/classNames";

export type CalendarColumnItemProps = {
    active?: boolean;
};

export default function CalendarColumnItem({ active = false }: CalendarColumnItemProps) {
    return (
        <div className={classNames('border border-action-border p-2 rounded text-sm leading-tight', active ? 'bg-action text-foreground-text' : '')}>
            <p>Label</p>
            <p>Lorem Ipsum</p>
        </div>
    );
}