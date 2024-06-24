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
exports.CategoryService = void 0;
const category_model_1 = require("./category.model");
const createCategoryIntoDB = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.CategoryModel.create(category);
    return result;
});
const createManyCategoriesIntoDB = (categories) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.CategoryModel.insertMany(categories);
    return result;
});
const getAllCategoriesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.CategoryModel.find();
    return result;
});
const getCategoryByNameFromDB = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.CategoryModel.findOne({ name });
    return result;
});
const updateCategoryByNameInDB = (name, category) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.CategoryModel.findOneAndUpdate({ name }, category, {
        new: true,
    });
    return result;
});
const deleteCategoryByNameFromDB = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_model_1.CategoryModel.findOneAndDelete({ name });
    return result;
});
exports.CategoryService = {
    createCategoryIntoDB,
    createManyCategoriesIntoDB,
    getAllCategoriesFromDB,
    getCategoryByNameFromDB,
    updateCategoryByNameInDB,
    deleteCategoryByNameFromDB,
};
