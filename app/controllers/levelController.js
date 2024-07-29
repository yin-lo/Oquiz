const { Level } = require('../models');

const levelController = {
  async list(req, res) {
    const levels = await Level.findAll();
    // Pour vérifier le contenu, on peut utiliser le JSON.stringify
    // console.log(JSON.stringify(levels, null, 2));
    res.render('levels', {
      levels,
    });
  },

  async create(req, res) {
    try {
      // J'utilise les données dans le body de la requête pour créer mon level
      await Level.create({
        name: req.body.name,
      });
      res.redirect('/levels');
    } catch (error) {
      console.trace(error);
      res.status(500).send('Une erreur est survenue');
    }
  },
};

module.exports = levelController;
