import { TCategory } from './category.interface';
import { CategoryModel } from './category.model';

const createCategoryIntoDB = async (category: TCategory) => {
    const result = await CategoryModel.create(category);
    return result;
};

const createManyCategoriesIntoDB = async (categories: TCategory[]) => {
    const result = await CategoryModel.insertMany(categories);
    return result;
};

const getAllCategoriesFromDB = async () => {
    const result = await CategoryModel.find();
    return result;
};

const getCategoryByNameFromDB = async (name: string) => {
    const result = await CategoryModel.findOne({ name });
    return result;
};

const updateCategoryByNameInDB = async (name: string, category: TCategory) => {
    const result = await CategoryModel.findOneAndUpdate({ name }, category, {
        new: true,
    });
    return result;
};

const deleteCategoryByNameFromDB = async (name: string) => {
    const result = await CategoryModel.findOneAndDelete({ name });
    return result;
};

export const CategoryService = {
    createCategoryIntoDB,
    createManyCategoriesIntoDB,
    getAllCategoriesFromDB,
    getCategoryByNameFromDB,
    updateCategoryByNameInDB,
    deleteCategoryByNameFromDB,
};
