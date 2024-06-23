import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { CategoryService } from './category.service';
import textProcessing from '../../utils/textProcessing';
import { TCategory } from './category.interface';

const createCategory = catchAsync(async (req, res) => {
    const { name, noOfProducts } = req.body;

    const category = {
        name: textProcessing(name),
        noOfProducts,
    };

    const result = await CategoryService.createCategoryIntoDB(category);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Category created successfully',
        data: result,
    });
});

const createManyCategories = catchAsync(async (req, res) => {
    const categories = req.body.map((category: TCategory) => ({
        name: textProcessing(category.name),
        noOfProducts: category.noOfProducts,
    }));

    const result = await CategoryService.createManyCategoriesIntoDB(categories);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Categories created successfully',
        data: result,
    });
});

const getAllCategories = catchAsync(async (req, res) => {
    const result = await CategoryService.getAllCategoriesFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Categories fetched successfully',
        data: result,
    });
});

const getCategoryByName = catchAsync(async (req, res) => {
    const name = textProcessing(req.params.name);

    const result = await CategoryService.getCategoryByNameFromDB(name);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Category fetched successfully',
        data: result,
    });
});
export const CategoryController = {
    createCategory,
    createManyCategories,
    getAllCategories,
    getCategoryByName,
};
