# BH - Ecommerce Server

### Live Link :

    https://bh-ecommerce.vercel.app/

## Auth

-   Create User

Request Body:

```json
{
    "name": "<name>",
    "email": "<email>",
    "contact": "<contact>",
    "password": "<password>",
    "address": "<address>",
    "image": "<image link>"
}
```

Response Example:

```json
{
    "success": true,
    "statusCode": 200,
    "message": "User created successfully",
    "data": {
        "name": "<name>",
        "email": "<email>",
        "contact": "<contact>",
        "password": "",
        "address": "<address>",
        "image": "<image link>"
        "_id": "6679829c1f1b6b58beaf1dd4",
        "createdAt": "2024-06-24T14:28:44.189Z",
        "updatedAt": "2024-06-24T14:28:44.189Z",
        "__v": 0
    }
}
```

-   Login

Request Body:

```json
{
    "email": "<email address>",
    "password": "<password>"
}
```

Response Example:

```json
{
    "success": true,
    "statusCode": 200,
    "message": "User logged in successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRhbnZpcmhvc3NhaW4yMEBpdXQtZGhha2EuZWR1IiwiaWF0IjoxNzE5MjQwMTU0LCJleHAiOjE3MjAxMDQxNTR9.njxKFBzTlSju3Aex1mtR5wf0gkoHFReamrQJtmdJrNs",
    "data": {
        "_id": "6679829c1f1b6b58beaf1dd4",
        "name": "Tanvir Hossain Dihan",
        "email": "tanvirhossain20@iut-dhaka.edu",
        "contact": "01714289841",
        "address": "Board Bazar, Gazipur",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGYf19I0Y3WvSTzPO_U9OAaAqoaw7YdyT3Zw&s",
        "createdAt": "2024-06-24T14:28:44.189Z",
        "updatedAt": "2024-06-24T14:28:44.189Z",
        "__v": 0
    }
}
```

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
    "stock": 150,
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
        "stock": 150,
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

-   Get All Product `/api/products/get-all-products`

Response Example:

```json
{
    "success": true,
    "statusCode": 200,
    "message": "All products fetched successfully",
    "data": [
        {
            "_id": "66784e7d1f7ba1acc52df5b2",
            "productCode": "123456",
            "name": "OnePlus Nord N30",
            "price": 299.99,
            "stock": 150,
            "description": "The OnePlus Nord N30 is a sleek and powerful smartphone offering great performance and value.",
            "image": "https://www.startech.com.bd/image/cache/catalog/mobile/oneplus/nord-n30-se/nord-n30-se-01-500x500.png",
            "categories": ["Smartphones"],
            "createdAt": "2024-06-23T16:34:05.063Z",
            "updatedAt": "2024-06-23T16:34:05.063Z",
            "__v": 0
        }
    ]
}
```

-   Get Product By ID `/api/products/get-product-by-product-code/123456`

Response Example:

```json
{
    "success": true,
    "statusCode": 200,
    "message": "Product fetched successfully",
    "data": [
        {
            "_id": "66784e7d1f7ba1acc52df5b2",
            "productCode": "123456",
            "name": "OnePlus Nord N30",
            "price": 299.99,
            "stock": 150,
            "description": "The OnePlus Nord N30 is a sleek and powerful smartphone offering great performance and value.",
            "image": "https://www.startech.com.bd/image/cache/catalog/mobile/oneplus/nord-n30-se/nord-n30-se-01-500x500.png",
            "categories": ["Smartphones"],
            "createdAt": "2024-06-23T16:34:05.063Z",
            "updatedAt": "2024-06-23T16:34:05.063Z",
            "__v": 0
        }
    ]
}
```
