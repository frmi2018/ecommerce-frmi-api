# 🛣️ Road map

Ecommerce-frmi-api / MERN project / 2021

#

## Prérequis

Pour le client final :  
Créer un email google  
Créer un compte github  
Créer un compte [Heroku](https://www.heroku.com/)  
Créer un compte [Netlify](https://www.netlify.com/)  
Créer la base de donnée sur [MongoDB Atlas](https://www.mongodb.com/)

## Mise en place du frontend (optionnel)

https://github.com/frmi2018/ecommerce-frmi-api

## Mise en place de la partie backend du projet

Ouvrir le terminal et vérifier que Node est installé

`node -v`

Créer le répertoire de l'application backend

`mkdir nom-du-projet-api`

Initialiser le projet

`cd nom-du-projet-api`  
`npm init -y`

Installation des packages

`npm i express dotenv nodemon`

Ouvrir éditeur de code

`code .`

Création du fichier .env

```
PORT=8000
```

Création du fichier .gitignore

```
node_modules
.env
```

Créer le repository sur github et faire le 1er commit  
Mise en place du backend sur Heroku (optionel)

## Développement

🎫 Créer le serveur Express (app.js)

- Démarrer le serveur
- Tester la route avec postman (optionel)

✅commit 01

🎫 Connection à la base de données (app.js)

✅commit 02

🎫 Création du répertoire routes + route user.js

✅commit 03

🎫 Création du répertoire controllers + controller user.js

✅commit 04

🎫 Création du répertoire models + Schema User ([Doc](https://mongoosejs.com/docs/api/schema.html#schema_Schema))

✅commit 05

🎫 Ajout Virtual fields password ([Doc](https://mongoosejs.com/docs/api/schema.html#schema_Schema-virtual))

📦uuid ([Doc](https://www.npmjs.com/package/uuid))  
📦crypto ([Doc](https://nodejs.org/api/crypto.html))

✅commit 06

🎫 Création de la route signup + test avec postman

📦morgan ([Doc](https://www.npmjs.com/package/morgan))  
📦body-parser ([Doc](https://www.npmjs.com/package/body-parser))  
📦cookie-parser ([Doc](https://www.npmjs.com/package/cookie-parser))

✅commit

🎫 Ajout fonction affichant les messages erreur mongodb

✅commit 07

🎫 Contrôler la saisie avec express-validator

📦express-validator ([Doc](https://www.npmjs.com/package/express-validator))

✅commit

🎫 Ajout fonction de connexion (signin)

📦express-jwt ([Doc](https://www.npmjs.com/package/express-jwt))  
📦jsonwebtoken ([Doc](https://www.npmjs.com/package/jsonwebtoken))

✅commit 08

🎫 Ajout fonction de déconnexion (signout)  
🎫 Ajout middleware pour savoir si utilisateur connecté

✅commit 09

🎫 Protection des routes  
🎫 Ajout d'une route pour tester l'accès aux routes

✅commit 10

## Protection des routes

🎫 Ajout middleware pour savoir si utilisateur est authentifié  
🎫 Ajout middleware pour savoir si utilisateur est admin

✅commit 11-Auth and admin middlewares

## Catégories CRUD

🎫 Créer Schema Category

✅commit 12-Category model route and controller

🎫 Créer route pour créer des catégories par admin

✅commit 13-Creating category by admin

🎫 Créer route pour lire une catégorie

✅commit "Category by id and single category"

🎫 Créer route pour supprimer une catégorie  
🎫 Créer route pour mettre à jour une catégorie  
🎫 Créer route pour lire toutes les catégories

✅commit "Category update / delete and get all"

## Produits CRUD

🎫 Créer Schema Product

✅commit 14-Product model

🎫 Créer route pour créer des produits par admin

📦formidable ([Doc](https://www.npmjs.com/package/formidable))  
📦js ([Doc](https://www.npmjs.com/package/jsonwebtoken))  
📦lodash ([Doc](https://www.npmjs.com/package/lodash))

✅Create product with file upload

🎫 Créer route pour vérifier les données envoyées sur la route product

✅commit "product validation"

🎫 Créer route pour lire un produit

✅commit "Product by id middleware and single product"

🎫 Créer route pour supprimer un produit

✅commit "Product delete"

🎫 Créer route pour mettre à jour un produit

✅commit "Product update"

🎫 Créer route pour lister les produits

✅commit "Products by sell and arrival on request query params"

🎫 Créer route pour lire les produits de même catégorie

✅commit "Related products"

🎫 Créer route pour lister les catégories d'un produit

✅commit "List product categories"

🎫 Créer route pour filtrer l'affichage des produits

✅commit "Products filters"

🎫 Créer route pour afficher la photo d'un produit

✅commit "Send product photo"

🎫 Créer route pour lire les informations d'un utilisateur  
🎫 Créer route pour mettre à jour les informations d'un utilisateur

✅commit "User profile read and update"

🎫 Résoudre l'erreur CORS ([Aide](https://www.youtube.com/watch?v=irpWV4effNE))

📦cors ([Doc](https://www.npmjs.com/package/cors))

✅commit "Installing CORS"
