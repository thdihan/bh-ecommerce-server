"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./products.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const products_validations_1 = require("./products.validations");
const router = express_1.default.Router();
router.post('/create-product', (0, validateRequest_1.default)(products_validations_1.ProductValidations.createProductValidationSchema), products_controller_1.ProductsController.createProduct);
router.post('/create-multiple-products', (0, validateRequest_1.default)(products_validations_1.ProductValidations.createMultipleProductsValidationSchema), products_controller_1.ProductsController.createMultipleProducts);
router.get('/get-all-products', products_controller_1.ProductsController.getAllProducts);
router.get('/get-product-by-product-code/:productCode', products_controller_1.ProductsController.getProductByProductCode);
exports.ProductRoutes = router;
