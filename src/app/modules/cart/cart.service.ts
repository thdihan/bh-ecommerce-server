import { Types } from 'mongoose';
import { CartModel } from './cart.mode';
import { TCart } from './cart.interface';
import { ProductModel } from '../products/products.model';
import AppError from '../../utils/appError';
import httpStatus from 'http-status';

const createCartIntoDB = async (cart: TCart) => {
    const result = await CartModel.create(cart);
    return result;
};

const addProductToCart = async (
    userId: Types.ObjectId,
    productId: Types.ObjectId,
) => {
    // Getting cart information from the database
    const cart = await CartModel.findOne({
        userId,
    });

    // If the cart does not exist, create a new cart
    if (!cart) {
        const newCart = await createCartIntoDB({
            userId,
            products: [{ productId }],
        });
        return newCart;
    }

    // checking if the product is already in the cart
    const product = cart.products.find(
        (product) => product.productId.toString() == productId.toString(),
    );

    // If the product is already in the cart, return the cart
    if (product) {
        console.log('Product already in the cart', product);
        return cart;
    }

    // Check valid product
    const validProduct = await ProductModel.findById(productId);
    if (!validProduct) {
        throw new AppError(httpStatus.NOT_FOUND, 'Invalid product');
    }

    // add the product to the cart
    cart.products.push({ productId });
    await cart.save();
    return cart;
};

const addMultipleProductsToCart = async (
    userId: Types.ObjectId,
    productIds: Types.ObjectId[],
) => {
    let result;
    for (const productId of productIds) {
        result = await addProductToCart(userId, productId);
    }
    return result;
};

export const CartServices = {
    createCartIntoDB,
    addProductToCart,
    addMultipleProductsToCart,
};
