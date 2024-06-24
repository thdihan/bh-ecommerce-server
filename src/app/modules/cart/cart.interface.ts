import { Types } from 'mongoose';

export type TCartProduct = {
    product: Types.ObjectId;
};

export type TCart = {
    userId: Types.ObjectId;
    products: TCartProduct[];
};
