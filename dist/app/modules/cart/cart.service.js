"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartServices = void 0;
const cart_mode_1 = require("./cart.mode");
const products_model_1 = require("../products/products.model");
const appError_1 = __importDefault(require("../../utils/appError"));
const http_status_1 = __importDefault(require("http-status"));
const createCartIntoDB = (cart) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_mode_1.CartModel.create(cart);
    return result;
});
const addProductToCart = (userId, product) => __awaiter(void 0, void 0, void 0, function* () {
    // Getting cart information from the database
    const cart = yield cart_mode_1.CartModel.findOne({
        userId,
    });
    // If the cart does not exist, create a new cart
    if (!cart) {
        const newCart = yield createCartIntoDB({
            userId,
            products: [{ product }],
        });
        return newCart;
    }
    // checking if the product is already in the cart
    const productExist = cart.products.find((product) => product.product.toString() == product.toString());
    // If the product is already in the cart, return the cart
    if (productExist) {
        console.log('Product already in the cart', product);
        return cart;
    }
    // Check valid product
    const validProduct = yield products_model_1.ProductModel.findById(product);
    if (!validProduct) {
        throw new appError_1.default(http_status_1.default.NOT_FOUND, 'Invalid product');
    }
    // add the product to the cart
    cart.products.push({ product });
    yield cart.save();
    return cart;
});
const addMultipleProductsToCart = (userId, productIds) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    for (const productId of productIds) {
        result = yield addProductToCart(userId, productId);
    }
    return result;
});
const getCartByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const cart = yield cart_mode_1.CartModel.findOne({ userId }).populate('products.product');
    return cart;
});
exports.CartServices = {
    createCartIntoDB,
    addProductToCart,
    addMultipleProductsToCart,
    getCartByUserId,
};
