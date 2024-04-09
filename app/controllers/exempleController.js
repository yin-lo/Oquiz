const { User } = require('../models/Sequelize/Association');

const exempleController = {
	async author(req, res) {
		const authorWithQuizes = await User.findAll({
			include: {
				association: 'quizes',
				include: {
					association: 'quizQuestions'
				}
			}
		});

		
		console.log(authorWithQuizes.map(quiz => quiz.toJSON()));
		res.render('authors', { authors: authorWithQuizes });
	},
};

module.exports = exempleController;
