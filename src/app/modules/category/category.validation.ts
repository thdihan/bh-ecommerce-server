import { z } from 'zod';

const createCategoryValidationSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: 'Name is required',
            invalid_type_error: 'Name must be a string',
        }),
        noOfProducts: z
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

const updateCategoryValidationSchema = z.object({
    body: z.object({
        name: z
            .string({
                required_error: 'Name is required',
                invalid_type_error: 'Name must be a string',
            })
            .optional(),
        noOfProducts: z
            .number({
                required_error: 'No of products is required',
                invalid_type_error: 'No of products must be a number',
            })
            .optional(),
    }),
});

const createManyCategoriesValidationSchema = z.object({
    body: z.array(
        z.object({
            name: z.string({
                required_error: 'Name is required',
                invalid_type_error: 'Name must be a string',
            }),
            noOfProducts: z
                .number({
                    required_error: 'No of products is required',
                    invalid_type_error: 'No of products must be a number',
                })
                .positive({
                    message: 'No of products must be a positive number',
                })
                .optional(),
        }),
    ),
});

export const CategoryValidations = {
    createCategoryValidationSchema,
    createManyCategoriesValidationSchema,
    updateCategoryValidationSchema,
};
