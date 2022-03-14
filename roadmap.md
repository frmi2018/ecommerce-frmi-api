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

Création du répertoire models + Schema user.js ([Aide](https://mongoosejs.com/docs/api/schema.html#schema_Schema))  
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
✅commit 08

## 3️⃣ Frontend
