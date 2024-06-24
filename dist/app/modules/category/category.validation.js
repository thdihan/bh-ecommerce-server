"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryValidations = void 0;
const zod_1 = require("zod");
const createCategoryValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required',
            invalid_type_error: 'Name must be a string',
        }),
        noOfProducts: zod_1.z
            .number({
            required_error: 'No of products is required',
            invalid_type_error: 'No of products must be a number',
        })
            .positive({
            message: 'No of products must be a positive number',
        })
            .optional(),
    }),
});
const updateCategoryValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: 'Name is required',
            invalid_type_error: 'Name must be a string',
        })
            .optional(),
        noOfProducts: zod_1.z
            .number({
            required_error: 'No of products is required',
            invalid_type_error: 'No of products must be a number',
        })
            .optional(),
    }),
});
const createManyCategoriesValidationSchema = zod_1.z.object({
    body: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required',
            invalid_type_error: 'Name must be a string',
        }),
        noOfProducts: zod_1.z
            .number({
            required_error: 'No of products is required',
            invalid_type_error: 'No of products must be a number',
        })
            .positive({
            message: 'No of products must be a positive number',
        })
            .optional(),
    })),
});
exports.CategoryValidations = {
    createCategoryValidationSchema,
    createManyCategoriesValidationSchema,
    updateCategoryValidationSchema,
};
