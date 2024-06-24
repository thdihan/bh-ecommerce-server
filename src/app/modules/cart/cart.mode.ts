import { Schema, model } from 'mongoose';
import { TCart, TCartProduct } from './cart.interface';

const cartProductSchema = new Schema<TCartProduct>(
    {
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const cartSchema = new Schema<TCart>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        products: [cartProductSchema],
    },
    {
        timestamps: true,
    },
);

export const CartModel = model<TCart>('Cart', cartSchema);
