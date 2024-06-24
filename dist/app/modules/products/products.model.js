"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
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
    stock: {
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
}, {
    timestamps: true,
});
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
exports.ProductModel = (0, mongoose_1.model)('Product', productSchema);
