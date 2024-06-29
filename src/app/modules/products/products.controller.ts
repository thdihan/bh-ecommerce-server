import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductService } from './products.service';
import AppError from '../../utils/appError';
import { CategoryService } from '../category/category.service';
import textProcessing from '../../utils/textProcessing';
import { TProduct } from './products.interface';

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
    categories.map((category: string) => {
        return textProcessing(category);
    });
    await checkCategories(categories);

    req.body.categories = categories;
    // Create the product
    const result = await ProductService.createProductIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product created successfully',
        data: result,
    });
});

const createMultipleProducts = catchAsync(async (req, res) => {
    let products = req.body;
    products = products.map((product: TProduct) => {
        let categories = product?.categories;
        console.log(categories);
        categories = categories?.map((category: string) => {
            return textProcessing(category);
        });
        product.categories = categories;
        return product;
    });

    for (const product of products) {
        const categories = product.categories;
        await checkCategories(categories);
    }

    const result = await ProductService.createMultipleProductsIntoDB(products);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Products created successfully',
        data: result,
    });
});

const getAllProducts = catchAsync(async (req, res) => {
    const result = await ProductService.getAllProductsFromDB();
    const data = {
        count: result.length,
        products: result,
    };

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All products fetched successfully',
        data: data,
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

const getProductsByCategory = catchAsync(async (req, res) => {
    const { category } = req.query;
    const result = await ProductService.getProductsByCategoryFromDB(
        category as string,
    );

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Products fetched successfully',
        data: result,
    });
});

export const ProductsController = {
    createProduct,
    getAllProducts,
    getProductByProductCode,
    createMultipleProducts,
    getProductsByCategory,
};
