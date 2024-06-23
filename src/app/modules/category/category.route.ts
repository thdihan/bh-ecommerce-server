import express from 'express';
import { CategoryController } from './category.controller';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryValidations } from './category.validation';

const router = express.Router();

router.post(
    '/create-category',
    validateRequest(CategoryValidations.createCategoryValidationSchema),
    CategoryController.createCategory,
);

router.post(
    '/create-many-categories',
    validateRequest(CategoryValidations.createManyCategoriesValidationSchema),
    CategoryController.createManyCategories,
);

export const CategoryRoutes = router;
