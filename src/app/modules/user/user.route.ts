import express from 'express';
import { UserController } from './user.controller';
import { UserValidations } from './user.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
    '/signup',
    validateRequest(UserValidations.createUserValidationSchema),
    UserController.createUser,
);

export const UserRoute = router;
