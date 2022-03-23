# 🛍️ ecommerce-frmi-api

📅 started in March 2022  
🧱 In progress...

## Frontend

Lorem

## About

Lorem

## 🟨 User routes

- Inscription  
  api/user/signup  
  Method : POST

| Body       | Type   | Required |
| ---------- | ------ | -------- |
| `email`    | string | Yes      |
| `password` | string | Yes      |
| `name`     | string | Yes      |

- Connection  
  api/user/signin  
  Method : POST

| Body       | Type   | Required |
| ---------- | ------ | -------- |
| `email`    | string | Yes      |
| `password` | string | Yes      |

- Déconnection  
  api/user/signout  
  Method : GET

## 🟨 Category routes CRUD

- Créer une catégorie  
  api/category/create/:userId  
  Method : POST

| Body   | Type   | Required |
| ------ | ------ | -------- |
| `name` | string | Yes      |

- Lire une catégorie  
  api/category/:categoryId  
  Method : GET

- Liste des catégories  
  api/categories  
  Method : GET

- Mettre à jour une catégorie  
  api/category/:categoryId/:userId  
  Method : PUT

| Body   | Type   | Required |
| ------ | ------ | -------- |
| `name` | string | Yes      |

- Supprimer une catégorie  
  api/category/:categoryId/:userId  
  Method : DELETE

## 🟨 Product routes CRUD

- Créer un produit  
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

- Lire un produit  
  api/product/:productId  
  Method : GET

- Lire un produit + les produits de la même catégorie  
  api/products/related/:productId  
  Method : GET

- Liste des produits  
  api/products  
  Method : GET

- Liste des catégories d'un produit  
  api/products/categories  
  Method : GET

- Mettre à jour un produit  
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

- Supprimer un produit  
  api/product/:productId/:userId  
  Method : DELETE

- Filtres produit  
  api/products/by/search  
  Method : POST

| Body       | Type     | Required |
| ---------- | -------- | -------- |
| `order`    | string   | No       |
| `sortBy`   | string   | No       |
| `limit`    | number   | No       |
| `skip`     | string   | No       |
| `findArgs` | ObjectId | No       |
