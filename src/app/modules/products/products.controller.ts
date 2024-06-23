import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductService } from './products.service';
import AppError from '../../utils/appError';
import { CategoryService } from '../category/category.service';

const checkCategories = async (categories: string[]) => {
    for (const category of categories) {
        await CategoryService.getCategoryByNameFromDB(category).then(
            (result) => {
                if (!result) {
                    throw new AppError(
                        httpStatus.NOT_FOUND,
                        `${category} not found in the DB`,
                    );
                }
            },
        );
    }
};
const createProduct = catchAsync(async (req, res) => {
    const categories = req.body.categories;
    await checkCategories(categories);

    // Create the product
    const result = await ProductService.createProductIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product created successfully',
        data: result,
    });
});

const getAllProducts = catchAsync(async (req, res) => {
    const result = await ProductService.getAllProductsFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All products fetched successfully',
        data: result,
    });
});

const getProductByProductCode = catchAsync(async (req, res) => {
    const { productCode } = req.params;
    const result =
        await ProductService.getProductByProductCodeFromDB(productCode);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product fetched successfully',
        data: result,
    });
});

export const ProductsController = {
    createProduct,
    getAllProducts,
    getProductByProductCode,
};
