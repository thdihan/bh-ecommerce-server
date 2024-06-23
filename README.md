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
