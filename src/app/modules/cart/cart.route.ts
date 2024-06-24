import express from 'express';
import { CartController } from './cart.controller';

const router = express.Router();

router.post('/add-product', CartController.addProductToCart);
router.post('/add-multiple-products', CartController.addMultipleProductsToCart);

export const CartRoutes = router;
