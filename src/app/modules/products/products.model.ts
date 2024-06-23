import { Schema, model } from 'mongoose';
import { TProduct } from './products.interface';

const productSchema = new Schema<TProduct>({
    productCode: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    availableUnit: {
        type: Number,
        required: true,
        default: 0,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    categories: {
        type: [String],
        required: true,
    },
});

export const ProductModel = model<TProduct>('Product', productSchema);
