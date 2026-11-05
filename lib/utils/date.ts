const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function getMonthLabel(month: number = 0, length: number = 0) {
    return months[month].slice(0, length);
}

export function getDaysAhead(fromDate: Date, daysAhead: number = 1) {
    const date = new Date(fromDate);
    date.setDate(fromDate.getDate() + daysAhead - 1);
    return date;
}

export function getDatesBetween(fromDate: Date, toDate: Date) {
    const dates = [];
    const currentDate = new Date(fromDate);
    currentDate.setDate(currentDate.getDate() + 1);

    while (currentDate < toDate) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
}
