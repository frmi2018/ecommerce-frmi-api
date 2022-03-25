# 🛍️ ecommerce-frmi-api

📅 started in March 2022  
🧱 In progress...

## Frontend

https://github.com/frmi2018/ecommerce-frmi-front

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

- Read User  
  api/user/:userId  
  Method : GET

- Update user  
  api/user/:userId  
  Method : PUT

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

- Photo d'un produit  
  api/product/photo/:productId  
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
