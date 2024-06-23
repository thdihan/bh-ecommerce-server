import express from 'express';
import { ProductsController } from './products.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ProductValidations } from './products.validations';

const router = express.Router();

router.post(
    '/create-product',
    validateRequest(ProductValidations.createProductValidationSchema),
    ProductsController.createProduct,
);

router.get('/get-all-products', ProductsController.getAllProducts);

router.get(
    '/get-product-by-product-code/:productCode',
    ProductsController.getProductByProductCode,
);

export const ProductRoutes = router;
