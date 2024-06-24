"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const router_1 = __importDefault(require("./app/router"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes
app.use('/api', router_1.default);
app.use(globalErrorHandler_1.default);
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the API',
        yourIP: req.ip,
    });
});
app.use('*', notFound_1.default);
exports.default = app;
