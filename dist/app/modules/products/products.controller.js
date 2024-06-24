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
exports.ProductsController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const products_service_1 = require("./products.service");
const appError_1 = __importDefault(require("../../utils/appError"));
const category_service_1 = require("../category/category.service");
const textProcessing_1 = __importDefault(require("../../utils/textProcessing"));
const checkCategories = (categories) => __awaiter(void 0, void 0, void 0, function* () {
    for (const category of categories) {
        yield category_service_1.CategoryService.getCategoryByNameFromDB(category).then((result) => {
            if (!result) {
                throw new appError_1.default(http_status_1.default.NOT_FOUND, `${category} not found in the DB`);
            }
        });
    }
});
const createProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = req.body.categories;
    categories.map((category) => {
        return (0, textProcessing_1.default)(category);
    });
    yield checkCategories(categories);
    req.body.categories = categories;
    // Create the product
    const result = yield products_service_1.ProductService.createProductIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Product created successfully',
        data: result,
    });
}));
const createMultipleProducts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let products = req.body;
    products = products.map((product) => {
        let categories = product === null || product === void 0 ? void 0 : product.categories;
        console.log(categories);
        categories = categories === null || categories === void 0 ? void 0 : categories.map((category) => {
            return (0, textProcessing_1.default)(category);
        });
        product.categories = categories;
        return product;
    });
    for (const product of products) {
        const categories = product.categories;
        yield checkCategories(categories);
    }
    const result = yield products_service_1.ProductService.createMultipleProductsIntoDB(products);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Products created successfully',
        data: result,
    });
}));
const getAllProducts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_service_1.ProductService.getAllProductsFromDB();
    const data = {
        count: result.length,
        products: result,
    };
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'All products fetched successfully',
        data: data,
    });
}));
const getProductByProductCode = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productCode } = req.params;
    const result = yield products_service_1.ProductService.getProductByProductCodeFromDB(productCode);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Product fetched successfully',
        data: result,
    });
}));
exports.ProductsController = {
    createProduct,
    getAllProducts,
    getProductByProductCode,
    createMultipleProducts,
};
