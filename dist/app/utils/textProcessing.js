"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const textProcessing = (input) => {
    // trim all the white spaces
    let result = input.trim();
    // convert all the characters to lowercase
    result = result.toLowerCase();
    // remove any special characters or symbols
    result = result.replace(/[^a-zA-Z ]/g, '');
    // make first latter of each word capital
    result = result
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    return result;
};
exports.default = textProcessing;
