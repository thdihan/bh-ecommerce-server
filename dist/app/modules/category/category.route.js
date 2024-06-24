"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("./category.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const category_validation_1 = require("./category.validation");
const router = express_1.default.Router();
router.post('/create-category', (0, validateRequest_1.default)(category_validation_1.CategoryValidations.createCategoryValidationSchema), category_controller_1.CategoryController.createCategory);
router.post('/create-many-categories', (0, validateRequest_1.default)(category_validation_1.CategoryValidations.createManyCategoriesValidationSchema), category_controller_1.CategoryController.createManyCategories);
router.get('/get-all-categories', category_controller_1.CategoryController.getAllCategories);
router.get('/get-category-by-name/:name', category_controller_1.CategoryController.getCategoryByName);
exports.CategoryRoutes = router;
