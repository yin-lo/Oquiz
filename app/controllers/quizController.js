const { Quiz } = require('../models');

const quizController = {
  async detail(req, res) {
    try {
      // Non mais il est vraiment utile...
      // - Quiz
      //   - Auteur
      //   - Tags
      //   - Question
      //    - Réponses
      //    - Level

      const quiz = await Quiz.findByPk(req.params.id, {
        include: [{
          association: 'author',
        }, {
          association: 'tags',
        }, {
          association: 'questions',
          // Je souhaite inclure dans mes questions
          include: [{
            association: 'answers',
          }, {
            association: 'level',
          }],
        }],
      });
      // console.log(JSON.stringify(quiz, null, 2));

      res.render('quiz', {
        quiz,
      });
    } catch (error) {
      console.trace(error);
      res.status(500).render('500');
    }
  },
};

module.exports = quizController;
