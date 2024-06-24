import { Router } from 'express';
import { ProductRoutes } from '../modules/products/products.route';
import { CategoryRoutes } from '../modules/category/category.route';
import { UserRoute } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
