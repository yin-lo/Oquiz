// On importe la methode Router depuis express (qui va nous permettre de creer un nouveau router)
const { Router } = require('express');
const mainController = require('./controllers/mainController');
const levelController = require('./controllers/levelController');
const exempleController = require('./controllers/exempleController');

// On creer un nouveau router
const router = Router();

// On defini une nouvelle route pour la page d'accueil ('/') en methode GET qui renvoi vers le controlleur home du mainController (methode stocke dans un objet)
router.get('/', mainController.home);

// Ajouter une nouvelle route pour liste tous les niveaux presents en BDD (levels)
router.get('/levels', levelController.displayLevels);

// On ajoute une nouvelle route. Le nom est toujours /levels mais cette fois ci la methode est post (on veut ajouter un niveau en bdd)
router.post('/levels', levelController.addLevel);

// Ajouter page de remerciements aux auteurs:
router.get('/authors', exempleController.author);

// On exporte le routeur pour pouvoir l'utiliser dans d'autres fichiers (en l'occurence l'index.js dans notre cas)
module.exports = router;
