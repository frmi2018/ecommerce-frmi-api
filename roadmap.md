# 🛣️ Road map MERN project - 2021 - FRMI

0️⃣ Prérequis ( partie client )  
1️⃣ Mise en place de la partie backend du projet  
2️⃣ Backend ( API )  
3️⃣ Frontend  
4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣0️⃣

#

## 0️⃣ Prérequis ( partie client )

Créer un email google  
Créer un compte github  
Créer un compte [Heroku](https://www.heroku.com/)  
Créer un compte [Netlify](https://www.netlify.com/)  
Créer la base de donnée sur [MongoDB Atlas](https://www.mongodb.com/)

## 1️⃣ Mise en place de la partie backend du projet

Ouvrir le terminal et vérifier que Node est installé

`node -v`

Créer le répertoire de l'application backend

`mkdir application-api`

Initialiser le projet

`cd application-api`  
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

## 2️⃣ Backend ( API )

Créer le serveur Express (app.js)  
✅Démarrer le serveur  
✅Tester la route / avec postman (optionel)  
✅commit 01

Connection à la base de données (app.js)  
✅commit 02

Création du répertoire routes + route user.js  
✅commit 03

Création du répertoire controllers + controller user.js  
✅commit 04

### 2️⃣1️⃣ Inscription / connection

Création du répertoire models
Création du modèle user ([Aide](https://mongoosejs.com/docs/api/schema.html#schema_Schema))  
✅commit 05

Ajout Virtual fields password
& methods ([Aide](https://mongoosejs.com/docs/api/schema.html#schema_Schema-virtual))  
📦Infos packages :  
uuid ([Aide](https://www.npmjs.com/package/uuid))  
crypto ([Aide](https://nodejs.org/api/crypto.html))  
✅commit 06

Création de la route signup + test avec postman  
📦Infos packages :  
morgan ([Aide](https://www.npmjs.com/package/morgan))  
body-parser ([Aide](https://www.npmjs.com/package/body-parser))  
cookie-parser ([Aide](https://www.npmjs.com/package/cookie-parser))  
✅commit

Ajout fonction pour message erreur mongodb  
✅commit 07

Contrôler name/email/password saisie avec express-validator  
📦Infos packages :  
express-validator ([Aide](https://www.npmjs.com/package/express-validator))  
✅commit

Ajout fonction signin + token + test avec postman  
📦Infos packages :  
express-jwt ([Aide](https://www.npmjs.com/package/express-jwt))  
jsonwebtoken ([Aide](https://www.npmjs.com/package/jsonwebtoken))  
✅commit 08

Ajout fonction signout  
Ajout middlewares : User connecté ?  
✅commit 09

### 2️⃣2️⃣ Protection des routes

Ajout une route pour tester l'accès aux routes  
✅commit 10

Protéger l'accès aux routes  
Ajout middlewares : User authentifié / User admin ?  
✅commit 11-Auth and admin middlewares

### 2️⃣3️⃣ Catégories CRUD

Création d'un modèle catégorie  
✅commit 12-Category model route and controller

Ajouter route pour créer des catégories par admin  
✅commit 13-Creating category by admin

Chercher une catégorie dans la bdd  
✅commit "Category by id and single category"

Supprimer une catégorie de la bdd  
Mise à jour d'une catégorie dans la bdd  
Chercher toutes les catégories dans la bdd  
✅commit "Category update / delete and get all"

### 2️⃣4️⃣ produits CRUD

Création d'un modèle product  
✅commit 14-Product model

Ajouter route pour créer des produits par admin  
📦Infos packages :  
formidable ([Aide](https://www.npmjs.com/package/formidable))  
js ([Aide](https://www.npmjs.com/package/jsonwebtoken))  
lodash ([Aide](https://www.npmjs.com/package/lodash))  
✅Create product with file upload

Vérifier les données envoyées sur la route product  
✅commit "product validation"

Chercher un produit de la bdd  
✅commit "Product by id middleware and single product"

Supprimer un produit de la bdd  
✅commit "Product delete"

Mise à jour d'un produit dans la bdd  
✅commit "Product update"

Lister des produits  
✅commit "Products by sell and arrival on request query params"

Produits connexes  
✅commit "Related products"

Afficher la liste des catégories d'un produit  
✅commit "List product categories"

## 3️⃣ Frontend
