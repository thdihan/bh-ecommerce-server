/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export interface TUser {
    name: string;
    email: string;
    contact: string;
    password: string;
    address: string;
    image: string;
}
export interface UserModel extends Model<TUser> {
    //instance methods for checking if the user exist
    isUserExistsByEmail(email: string): Promise<TUser>;
    //instance methods for checking if passwords are matched
    isPasswordMatched(
        plainTextPassword?: string,
        hashedPassword?: string,
    ): Promise<boolean>;
    isJWTIssuedBeforePasswordChanged(
        passwordChangedTimestamp: Date,
        jwtIssuedTimestamp: number,
    ): boolean;
}
