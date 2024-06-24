"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartRoutes = void 0;
const express_1 = __importDefault(require("express"));
const cart_controller_1 = require("./cart.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post('/add-product', (0, auth_1.default)(), cart_controller_1.CartController.addProductToCart);
router.post('/add-multiple-products', (0, auth_1.default)(), cart_controller_1.CartController.addMultipleProductsToCart);
router.get('/get-cart/:userId', (0, auth_1.default)(), cart_controller_1.CartController.getCartByUserId);
exports.CartRoutes = router;
