const { Tag } = require('../models');

const tagController = {
  async list(req, res) {
    try {
      const tags = await Tag.findAll({
        order: [
          // Je trie mes tags par ordre alphabétique
          ['name', 'ASC'],
          // Et je trie les quizzes de chaque tag par ordre alphabétique
          ['quizzes', 'title', 'ASC'],
        ],
        include: [{
          association: 'quizzes',
        }],
      });
      res.render('tags', {
        tags,
      });
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = tagController;
