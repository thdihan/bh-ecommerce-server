import { z } from 'zod';

const createProductValidationSchema = z.object({
    body: z.object({
        productCode: z.string({
            required_error: 'Product code is required',
            invalid_type_error: 'Product code must be a string',
        }),
        name: z.string({
            required_error: 'Name is required',
            invalid_type_error: 'Name must be a string',
        }),
        price: z
            .number({
                required_error: 'Price is required',
                invalid_type_error: 'Price must be a number',
            })
            .positive({
                message: 'Price must be a positive number',
            }),
        stock: z
            .number({
                required_error: 'Available unit is required',
                invalid_type_error: 'Available unit must be a number',
            })
            .positive({
                message: 'Available unit must be a positive number',
            }),
        description: z.string({
            required_error: 'Description is required',
            invalid_type_error: 'Description must be a string',
        }),
        image: z.string({
            required_error: 'Image is required',
            invalid_type_error: 'Image must be a string',
        }),
        categories: z.array(z.string()),
    }),
});

const createMultipleProductsValidationSchema = z.object({
    body: z.array(
        z.object({
            productCode: z.string({
                required_error: 'Product code is required',
                invalid_type_error: 'Product code must be a string',
            }),
            name: z.string({
                required_error: 'Name is required',
                invalid_type_error: 'Name must be a string',
            }),
            price: z
                .number({
                    required_error: 'Price is required',
                    invalid_type_error: 'Price must be a number',
                })
                .positive({
                    message: 'Price must be a positive number',
                }),
            stock: z
                .number({
                    required_error: 'Available unit is required',
                    invalid_type_error: 'Available unit must be a number',
                })
                .positive({
                    message: 'Available unit must be a positive number',
                }),
            description: z.string({
                required_error: 'Description is required',
                invalid_type_error: 'Description must be a string',
            }),
            image: z.string({
                required_error: 'Image is required',
                invalid_type_error: 'Image must be a string',
            }),
            categories: z.array(z.string()),
        }),
    ),
});

const updateProductValidationSchema = z.object({
    body: z.object({
        productCode: z
            .string({
                required_error: 'Product code is required',
                invalid_type_error: 'Product code must be a string',
            })
            .optional(),
        name: z
            .string({
                required_error: 'Name is required',
                invalid_type_error: 'Name must be a string',
            })
            .optional(),
        price: z
            .number({
                required_error: 'Price is required',
                invalid_type_error: 'Price must be a number',
            })
            .positive({
                message: 'Price must be a positive number',
            })
            .optional(),
        stock: z
            .number({
                required_error: 'Available unit is required',
                invalid_type_error: 'Available unit must be a number',
            })
            .positive({
                message: 'Available unit must be a positive number',
            })
            .optional(),
        description: z
            .string({
                required_error: 'Description is required',
                invalid_type_error: 'Description must be a string',
            })
            .optional(),
        image: z
            .string({
                required_error: 'Image is required',
                invalid_type_error: 'Image must be a string',
            })
            .optional(),
        categories: z.array(z.string()).optional(),
    }),
});

export const ProductValidations = {
    createProductValidationSchema,
    createMultipleProductsValidationSchema,
    updateProductValidationSchema,
};
