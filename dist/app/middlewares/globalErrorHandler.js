"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Somethig went wrong';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message: message,
        error: err,
    });
};
exports.default = globalErrorHandler;
