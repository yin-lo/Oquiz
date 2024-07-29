const { Quiz } = require('../models');

const mainController = {
  async index(req, res) {
    try {
      // Notre but est de récupérer les quiz de notre BDD
      const quizzes = await Quiz.findAll({
        include: [{
          association: 'author',
        }, {
          association: 'tags',
        }],
      });
      // console.log(JSON.stringify(quizzes, null, 2));

      res.render('home', {
        // Je passe mes quizzes récupérés à ma vue
        quizzes,
      });
    } catch (error) {
      console.trace(error);
      res.status(500).render('500');
    }
  },
};

module.exports = mainController;
