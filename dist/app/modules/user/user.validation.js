"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidations = void 0;
const zod_1 = require("zod");
const createUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required',
            invalid_type_error: 'Name must be a string',
        }),
        email: zod_1.z.string({
            required_error: 'Email is required',
            invalid_type_error: 'Email must be a string',
        }),
        contact: zod_1.z.string({
            required_error: 'Contact is required',
            invalid_type_error: 'Contact must be a string',
        }),
        password: zod_1.z.string({
            required_error: 'Password is required',
            invalid_type_error: 'Password must be a string',
        }),
        address: zod_1.z.string({
            required_error: 'Address is required',
            invalid_type_error: 'Address must be a string',
        }),
        image: zod_1.z.string({
            required_error: 'Image is required',
            invalid_type_error: 'Image must be a string',
        }),
    }),
});
const updateUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: 'Name is required',
            invalid_type_error: 'Name must be a string',
        })
            .optional(),
        email: zod_1.z
            .string({
            required_error: 'Email is required',
            invalid_type_error: 'Email must be a string',
        })
            .optional(),
        contact: zod_1.z
            .string({
            required_error: 'Contact is required',
            invalid_type_error: 'Contact must be a string',
        })
            .optional(),
        password: zod_1.z
            .string({
            required_error: 'Password is required',
            invalid_type_error: 'Password must be a string',
        })
            .optional(),
        address: zod_1.z
            .string({
            required_error: 'Address is required',
            invalid_type_error: 'Address must be a string',
        })
            .optional(),
        image: zod_1.z
            .string({
            required_error: 'Image is required',
            invalid_type_error: 'Image must be a string',
        })
            .optional(),
    }),
});
exports.UserValidations = {
    createUserValidationSchema,
    updateUserValidationSchema,
};
