export default function classNames(...classFragments: string[]): string {
    return classFragments.join(' ').trim();
}