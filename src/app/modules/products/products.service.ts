import { TProduct } from './products.interface';
import { ProductModel } from './products.model';

const createProductIntoDB = async (product: TProduct) => {
    const result = await ProductModel.create(product);
    return result;
};

const createMultipleProductsIntoDB = async (products: TProduct[]) => {
    const result = await ProductModel.insertMany(products);
    return result;
};

const getAllProductsFromDB = async () => {
    const result = await ProductModel.find();
    return result;
};

const getProductByProductCodeFromDB = async (productCode: string) => {
    const result = await ProductModel.findOne({ productCode });
    return result;
};

const getProductsByCategoryFromDB = async (category: string) => {
    const result = await ProductModel.find({ categories: { $in: [category] } });
    return result;
};

const updateProductByProductCodeInDB = async (
    productCode: string,
    product: TProduct,
) => {
    const result = await ProductModel.findOneAndUpdate(
        { productCode },
        product,
        { new: true },
    );
    return result;
};

const deleteProductByProductCodeFromDB = async (productCode: string) => {
    const result = await ProductModel.findOneAndDelete({ productCode });
    return result;
};

export const ProductService = {
    createProductIntoDB,
    createMultipleProductsIntoDB,
    getAllProductsFromDB,
    getProductByProductCodeFromDB,
    getProductsByCategoryFromDB,
    updateProductByProductCodeInDB,
    deleteProductByProductCodeFromDB,
};
