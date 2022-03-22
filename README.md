# 🛍️ ecommerce-frmi-api

📅 started in March 2022  
🧱 In progress...

## Frontend

Lorem

## About

Lorem

## 🟨 User routes

- inscription  
  api/user/signup  
  Method : POST

| Body       | Type   | Required |
| ---------- | ------ | -------- |
| `email`    | string | Yes      |
| `password` | string | Yes      |
| `name`     | string | Yes      |

- connection  
  api/user/signin  
  Method : POST

| Body       | Type   | Required |
| ---------- | ------ | -------- |
| `email`    | string | Yes      |
| `password` | string | Yes      |

- déconnection  
  api/user/signout  
  Method : GET

## 🟨 Category routes

- créer une catégorie  
  api/category/create/:userId  
  Method : POST

| Body   | Type   | Required |
| ------ | ------ | -------- |
| `name` | string | Yes      |

- chercher une catégorie dans la BDD  
  api/category/:categoryId  
  Method : GET

- chercher toutes les catégories dans la BDD  
  api/categories  
  Method : GET

- mettre à jour une catégorie  
  api/category/:categoryId/:userId  
  Method : PUT

| Body   | Type   | Required |
| ------ | ------ | -------- |
| `name` | string | Yes      |

- supprimer une catégorie de la BDD  
  api/category/:categoryId/:userId  
  Method : DELETE

## 🟨 Product routes

- créer un produit  
  api/product/create/:userId  
  Method : POST

| Body          | Type     | Required |
| ------------- | -------- | -------- |
| `name`        | string   | Yes      |
| `description` | string   | Yes      |
| `price`       | number   | Yes      |
| `category`    | ObjectId | Yes      |
| `shipping`    | boolean  | No       |
| `quantity`    | number   | No       |
| `photo`       | string   | No       |

- chercher un produit dans la BDD  
  api/product/:productId  
  Method : GET

- envoyer une liste de produits  
  api/products  
  Method : GET

- supprimer un produit dans la BDD  
  api/product/:productId/:userId  
  Method : DELETE

- mettre à jour un produit dans la BDD  
  api/product/:productId/:userId  
  Method : PUT

| Body          | Type     | Required |
| ------------- | -------- | -------- |
| `name`        | string   | Yes      |
| `description` | string   | Yes      |
| `price`       | number   | Yes      |
| `category`    | ObjectId | Yes      |
| `shipping`    | boolean  | No       |
| `quantity`    | number   | No       |
| `photo`       | string   | No       |
