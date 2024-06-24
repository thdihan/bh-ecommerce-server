import express from 'express';
import { CartController } from './cart.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('/add-product', auth(), CartController.addProductToCart);
router.post(
    '/add-multiple-products',
    auth(),
    CartController.addMultipleProductsToCart,
);
router.get('/get-cart/:userId', auth(), CartController.getCartByUserId);

export const CartRoutes = router;
