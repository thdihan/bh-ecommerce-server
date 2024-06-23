import { Schema, model } from 'mongoose';
import { TProduct } from './products.interface';

const productSchema = new Schema<TProduct>(
    {
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
    },
    {
        timestamps: true,
    },
);

// const checkCategories = (categories: string[]) => {
//     categories.forEach(async (category: string) => {
//         const result = await CategoryService.getCategoryByNameFromDB(category);
//         if (!result) {
//             throw new AppError(
//                 httpStatus.NOT_FOUND,
//                 `${category} not found in the DB`,
//             );
//         }
//     });
// };
// productSchema.pre('save', async function (next) {
//     const categories = this.categories;

//     await checkCategories(categories);

//     console.log('WORKED');
//     next();
// });

export const ProductModel = model<TProduct>('Product', productSchema);
