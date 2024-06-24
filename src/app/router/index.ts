import { Router } from 'express';
import { ProductRoutes } from '../modules/products/products.route';
import { CategoryRoutes } from '../modules/category/category.route';
import { UserRoute } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { CartRoutes } from '../modules/cart/cart.route';

const router = Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: AuthRoutes,
    },
    {
        path: '/category',
        route: CategoryRoutes,
    },
    {
        path: '/products',
        route: ProductRoutes,
    },
    {
        path: '/user',
        route: UserRoute,
    },
    {
        path: '/cart',
        route: CartRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
