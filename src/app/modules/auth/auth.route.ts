import express from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidations } from './auth.validation';

const router = express.Router();

router.post(
    '/login',
    validateRequest(AuthValidations.loginUserValidationSchema),
    AuthController.login,
);

export const AuthRoutes = router;
