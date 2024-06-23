# BH - Ecommerce Server

## Category Api

-   Create Single Category `/api/category/create-category`

Request Body:

```json
{
    "name": "Smartphones"
}
```

Response Example:

```json
{
    "success": true,
    "statusCode": 200,
    "message": "Category created successfully",
    "data": {
        "name": "Smartphones",
        "noOfProducts": 0,
        "_id": "66783cc6488664c06fbd2c17",
        "createdAt": "2024-06-23T15:18:30.949Z",
        "updatedAt": "2024-06-23T15:18:30.949Z",
        "__v": 0
    }
}
```

-   Create Many Categories `/api/category/create-many-categories`

Request Body:

```json
[
    {
        "name": "Smartphones"
    },
    {
        "name": "Laptops"
    },
    {
        "name": "Accessories"
    }
]
```

Response Example:

```json
{
    "success": true,
    "statusCode": 200,
    "message": "Categories created successfully",
    "data": [
        {
            "name": "Smartphones",
            "noOfProducts": 0,
            "_id": "66783eb934f3171aaa178791",
            "__v": 0,
            "createdAt": "2024-06-23T15:26:49.578Z",
            "updatedAt": "2024-06-23T15:26:49.578Z"
        },
        {
            "name": "Laptops",
            "noOfProducts": 0,
            "_id": "66783eb934f3171aaa178792",
            "__v": 0,
            "createdAt": "2024-06-23T15:26:49.578Z",
            "updatedAt": "2024-06-23T15:26:49.578Z"
        },
        {
            "name": "Accessories",
            "noOfProducts": 0,
            "_id": "66783eb934f3171aaa178799",
            "__v": 0,
            "createdAt": "2024-06-23T15:26:49.579Z",
            "updatedAt": "2024-06-23T15:26:49.579Z"
        }
    ]
}
```

-   Get All Categories `/api/category/get-all-categories`

Response Example:

```json
{
    "success": true,
    "statusCode": 200,
    "message": "Categories fetched successfully",
    "data": [
        {
            "_id": "66783eb934f3171aaa178791",
            "name": "Smartphones",
            "noOfProducts": 0,
            "__v": 0,
            "createdAt": "2024-06-23T15:26:49.578Z",
            "updatedAt": "2024-06-23T15:26:49.578Z"
        },
        {
            "_id": "66783eb934f3171aaa178792",
            "name": "Laptops",
            "noOfProducts": 0,
            "__v": 0,
            "createdAt": "2024-06-23T15:26:49.578Z",
            "updatedAt": "2024-06-23T15:26:49.578Z"
        }
    ]
}
```

-   Get Category Information By Name `/api/category/get-category-by-name/Smartphones`

Response Example:

```json
{
    "success": true,
    "statusCode": 200,
    "message": "Category fetched successfully",
    "data": [
        {
            "_id": "66783eb934f3171aaa178791",
            "name": "Smartphones",
            "noOfProducts": 0,
            "__v": 0,
            "createdAt": "2024-06-23T15:26:49.578Z",
            "updatedAt": "2024-06-23T15:26:49.578Z"
        }
    ]
}
```

## Product Api

-   Create Product `/api/products/create-product`

Request Body:

```json
{
    "productCode": "123456",
    "name": "OnePlus Nord N30",
    "price": 299.99,
    "availableUnit": 150,
    "description": "The OnePlus Nord N30 is a sleek and powerful smartphone offering great performance and value.",
    "image": "https://www.startech.com.bd/image/cache/catalog/mobile/oneplus/nord-n30-se/nord-n30-se-01-500x500.png",
    "categories": ["Electronics", "Mobile Phones", "Smartphones"]
}
```

Response Example:

```json
{
    "success": true,
    "statusCode": 200,
    "message": "Product created successfully",
    "data": {
        "productCode": "123456",
        "name": "OnePlus Nord N30",
        "price": 299.99,
        "availableUnit": 150,
        "description": "The OnePlus Nord N30 is a sleek and powerful smartphone offering great performance and value.",
        "image": "https://www.startech.com.bd/image/cache/catalog/mobile/oneplus/nord-n30-se/nord-n30-se-01-500x500.png",
        "categories": ["Electronics", "Mobile Phones", "Smartphones"],
        "_id": "66783636b8ab38857f275670",
        "createdAt": "2024-06-23T14:50:30.657Z",
        "updatedAt": "2024-06-23T14:50:30.657Z",
        "__v": 0
    }
}
```
