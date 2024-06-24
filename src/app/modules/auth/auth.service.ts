import httpStatus from 'http-status';
import AppError from '../../utils/appError';
import { TLoginUser } from './auth.interface';
import config from '../../config';
import { createToken } from './auth.utils';
import { TUser } from '../user/user.interface';
import { User } from '../user/user.model';

const loginUserFromDB = async (payload: TLoginUser) => {
    // checking if the user is exist

    const user: Partial<TUser> = await User.isUserExistsByEmail(payload.email);

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
    }

    if (!(await User.isPasswordMatched(payload?.password, user?.password)))
        throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');

    //create token and sent to the  client
    const jwtPayload = {
        email: user.email,
    };

    const accessToken = createToken(
        jwtPayload,
        config.jwt_access_secret as string,
        config.jwt_access_expires_in as string,
    );

    const refreshToken = createToken(
        jwtPayload,
        config.jwt_refresh_secret as string,
        config.jwt_refresh_expires_in as string,
    );

    // Getting User without password.
    const loggedInUser = await User.findOne({ email: payload.email }).select(
        '-password',
    );

    return {
        accessToken,
        refreshToken,
        loggedInUser,
    };
};

export const AuthService = {
    loginUserFromDB,
};
