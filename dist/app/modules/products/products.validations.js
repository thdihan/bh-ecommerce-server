"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidations = void 0;
const zod_1 = require("zod");
const createProductValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        productCode: zod_1.z.string({
            required_error: 'Product code is required',
            invalid_type_error: 'Product code must be a string',
        }),
        name: zod_1.z.string({
            required_error: 'Name is required',
            invalid_type_error: 'Name must be a string',
        }),
        price: zod_1.z
            .number({
            required_error: 'Price is required',
            invalid_type_error: 'Price must be a number',
        })
            .positive({
            message: 'Price must be a positive number',
        }),
        stock: zod_1.z
            .number({
            required_error: 'Available unit is required',
            invalid_type_error: 'Available unit must be a number',
        })
            .positive({
            message: 'Available unit must be a positive number',
        }),
        description: zod_1.z.string({
            required_error: 'Description is required',
            invalid_type_error: 'Description must be a string',
        }),
        image: zod_1.z.string({
            required_error: 'Image is required',
            invalid_type_error: 'Image must be a string',
        }),
        categories: zod_1.z.array(zod_1.z.string()),
    }),
});
const createMultipleProductsValidationSchema = zod_1.z.object({
    body: zod_1.z.array(zod_1.z.object({
        productCode: zod_1.z.string({
            required_error: 'Product code is required',
            invalid_type_error: 'Product code must be a string',
        }),
        name: zod_1.z.string({
            required_error: 'Name is required',
            invalid_type_error: 'Name must be a string',
        }),
        price: zod_1.z
            .number({
            required_error: 'Price is required',
            invalid_type_error: 'Price must be a number',
        })
            .positive({
            message: 'Price must be a positive number',
        }),
        stock: zod_1.z
            .number({
            required_error: 'Available unit is required',
            invalid_type_error: 'Available unit must be a number',
        })
            .positive({
            message: 'Available unit must be a positive number',
        }),
        description: zod_1.z.string({
            required_error: 'Description is required',
            invalid_type_error: 'Description must be a string',
        }),
        image: zod_1.z.string({
            required_error: 'Image is required',
            invalid_type_error: 'Image must be a string',
        }),
        categories: zod_1.z.array(zod_1.z.string()),
    })),
});
const updateProductValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        productCode: zod_1.z
            .string({
            required_error: 'Product code is required',
            invalid_type_error: 'Product code must be a string',
        })
            .optional(),
        name: zod_1.z
            .string({
            required_error: 'Name is required',
            invalid_type_error: 'Name must be a string',
        })
            .optional(),
        price: zod_1.z
            .number({
            required_error: 'Price is required',
            invalid_type_error: 'Price must be a number',
        })
            .positive({
            message: 'Price must be a positive number',
        })
            .optional(),
        stock: zod_1.z
            .number({
            required_error: 'Available unit is required',
            invalid_type_error: 'Available unit must be a number',
        })
            .positive({
            message: 'Available unit must be a positive number',
        })
            .optional(),
        description: zod_1.z
            .string({
            required_error: 'Description is required',
            invalid_type_error: 'Description must be a string',
        })
            .optional(),
        image: zod_1.z
            .string({
            required_error: 'Image is required',
            invalid_type_error: 'Image must be a string',
        })
            .optional(),
        categories: zod_1.z.array(zod_1.z.string()).optional(),
    }),
});
exports.ProductValidations = {
    createProductValidationSchema,
    createMultipleProductsValidationSchema,
    updateProductValidationSchema,
};
