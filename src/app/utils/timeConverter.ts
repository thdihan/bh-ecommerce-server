export function getCurrentTimeIn24HourFormat(date: Date) {
    // Get the current date and time
    const now = new Date(date);

    // Extract hours and minutes
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    // Combine hours and minutes in "HH:mm" format
    const time24HourFormat = `${hours}:${minutes}`;

    return time24HourFormat;
}
