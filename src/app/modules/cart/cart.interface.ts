import { Types } from 'mongoose';

export type TCartProduct = {
    productId: Types.ObjectId;
};

export type TCart = {
    userId: Types.ObjectId;
    products: TCartProduct[];
};
