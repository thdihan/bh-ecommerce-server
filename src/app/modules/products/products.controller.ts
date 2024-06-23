import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductService } from './products.service';

const createProduct = catchAsync(async (req, res) => {
    const result = await ProductService.createProductIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product created successfully',
        data: result,
    });
});

export const ProductsController = {
    createProduct,
};
