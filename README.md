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

## 🟨 Product routes

- créer un produit dans une catégorie  
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

| Body       | Type   | Required |
| ---------- | ------ | -------- |
| `email`    | string | Yes      |
| `password` | string | Yes      |

- chercher un produit dans la BDD  
  api/product/:productId  
  Method : GET
