import { z } from 'zod';

const loginUserValidationSchema = z.object({
    body: z.object({
        email: z.string().email(),
        password: z.string(),
    }),
});

export const AuthValidations = {
    loginUserValidationSchema,
};
