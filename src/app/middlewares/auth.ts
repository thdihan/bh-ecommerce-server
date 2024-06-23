/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { TUserRole } from '../modules/user/user.interface';
import { User } from '../modules/user/user.model';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';

const auth = (...requiredRoles: TUserRole[]) => {
    return catchAsync(
        async (req: Request, res: Response, next: NextFunction) => {
            const tokenWithBearer = req.headers.authorization;

            // checking if the token is missing
            if (!tokenWithBearer) {
                throw new AppError(
                    httpStatus.UNAUTHORIZED,
                    'You have no access to this route',
                );
            }
            const token = tokenWithBearer.split(' ')[1];
            // checking if the given token is valid
            const decoded = jwt.verify(
                token,
                config.jwt_access_secret as string,
            ) as JwtPayload;

            const { role, email, iat } = decoded;

            // checking if the user is exist
            const user = await User.isUserExistsByEmail(email);

            if (!user) {
                throw new AppError(
                    httpStatus.NOT_FOUND,
                    'This user is not found !',
                );
            }

            if (requiredRoles && !requiredRoles.includes(role)) {
                throw new AppError(
                    httpStatus.UNAUTHORIZED,
                    'You have no access to this route',
                );
            }

            req.user = decoded as JwtPayload;
            next();
        },
    );
};

export default auth;
