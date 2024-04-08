// Import de l'outil express qui nous simplifie la creation d'un serveur web
const express = require('express')
// Import de l'outil dotenv et plus particuliere de config
require("dotenv/config")
// Import du router creer par nos soins
const router = require('./app/router')
// Import du middleware qui renvoi vers la vue 404
const notFoundMiddleware = require('./app/middlewares/notFoundMiddleware')

// Definition d'un nouveau serveur express
const app = express()

// On defini le port comme etant celui renseigne dans le .env ou bien si aucun port n'a ete renseigne on prend le 3000 par defaut
const port = process.env.PORT || 3000

// On doit dire a express quel template de vue on utilise (dans notre cas ejs)
app.set('view engine', 'ejs');
app.set('views', './app/views');

// Deployer tous les fichiers statiques presents dans le dossier public
app.use(express.static('public'));

// On veut dire a express de formatter correctement les informations envoyee dans le body d'une requete
app.use(express.urlencoded({ extended: true }));

// On fait appel a notre router qui nous permet de definir les differentes routes disponibles dans notre application
app.use(router)

// On defini une route par laquelle on passe si aucune des routes precedentes ne correspond a la requete utilisateur
app.use(notFoundMiddleware)

// On demande a notre serveur express d'ecouter en permanence sur le port defini
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})