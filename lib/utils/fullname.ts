export function isFullName(value: string = ""): boolean {
    if (value.length === 0) return false;
    // - Contains only letters (Unicode supported, including å, ä, ö, é, ü).
    // - Requires at least one letter before the space.
    // - Requires at least one whitespace character between words.
    // - Requires at least one letter after the space.
    // - Allows multiple spaces between words.
    // - Does not allow numbers, punctuation, or special characters.
    // - Does not allow leading or trailing spaces.
    // - Requires at least two words.
    const regex = /^\p{L}+(?:\s+\p{L}+)+$/u;
    return regex.test(value);
}