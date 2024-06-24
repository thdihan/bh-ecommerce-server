import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CartServices } from './cart.service';

const addProductToCart = catchAsync(async (req, res) => {
    const { userId, productId } = req.body;

    const result = await CartServices.addProductToCart(userId, productId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Added to cart successfully',
        data: result,
    });
});

const addMultipleProductsToCart = catchAsync(async (req, res) => {
    const { userId, productIds } = req.body;

    const result = await CartServices.addMultipleProductsToCart(
        userId,
        productIds,
    );

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Added to cart successfully',
        data: result,
    });
});

export const CartController = {
    addProductToCart,
    addMultipleProductsToCart,
};
