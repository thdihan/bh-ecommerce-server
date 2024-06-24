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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const products_model_1 = require("./products.model");
const createProductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductModel.create(product);
    return result;
});
const createMultipleProductsIntoDB = (products) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductModel.insertMany(products);
    return result;
});
const getAllProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductModel.find();
    return result;
});
const getProductByProductCodeFromDB = (productCode) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductModel.findOne({ productCode });
    return result;
});
const getProductsByCategoryFromDB = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductModel.find({ categories: category });
    return result;
});
const updateProductByProductCodeInDB = (productCode, product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductModel.findOneAndUpdate({ productCode }, product, { new: true });
    return result;
});
const deleteProductByProductCodeFromDB = (productCode) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductModel.findOneAndDelete({ productCode });
    return result;
});
exports.ProductService = {
    createProductIntoDB,
    createMultipleProductsIntoDB,
    getAllProductsFromDB,
    getProductByProductCodeFromDB,
    getProductsByCategoryFromDB,
    updateProductByProductCodeInDB,
    deleteProductByProductCodeFromDB,
};
