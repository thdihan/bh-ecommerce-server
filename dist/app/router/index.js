"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_route_1 = require("../modules/products/products.route");
const category_route_1 = require("../modules/category/category.route");
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/auth/auth.route");
const cart_route_1 = require("../modules/cart/cart.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/category',
        route: category_route_1.CategoryRoutes,
    },
    {
        path: '/products',
        route: products_route_1.ProductRoutes,
    },
    {
        path: '/user',
        route: user_route_1.UserRoute,
    },
    {
        path: '/cart',
        route: cart_route_1.CartRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
