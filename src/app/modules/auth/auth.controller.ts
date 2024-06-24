import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { AuthService } from './auth.service';

const login = catchAsync(async (req, res) => {
    const result = await AuthService.loginUserFromDB(req.body);

    res.status(httpStatus.OK).json({
        success: true,
        statusCode: httpStatus.OK,
        message: 'User logged in successfully',
        token: result?.accessToken,
        data: result?.loggedInUser,
    });
});

export const AuthController = {
    login,
};
