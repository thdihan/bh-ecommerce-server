import { Router } from 'express';
import { ProductRoutes } from '../modules/products/products.route';
import { CategoryRoutes } from '../modules/category/category.route';

const router = Router();

const moduleRoutes = [
    {
        path: '/category',
        route: CategoryRoutes,
    },
    {
        path: '/products',
        route: ProductRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
