"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentTimeIn24HourFormat = void 0;
function getCurrentTimeIn24HourFormat(date) {
    // Get the current date and time
    const now = new Date(date);
    // Extract hours and minutes
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    // Combine hours and minutes in "HH:mm" format
    const time24HourFormat = `${hours}:${minutes}`;
    return time24HourFormat;
}
exports.getCurrentTimeIn24HourFormat = getCurrentTimeIn24HourFormat;
