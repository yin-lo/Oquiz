// const Level = require('./app/models/Sequelize/Level');
// const Quiz = require('./app/models/Sequelize/Quiz');
// const Question = require('./app/models/Sequelize/Question');

const { Answer, Level, Question, Quiz, Tag, User } = require('./app/models/Sequelize/Association');

const { Op } = require('sequelize');

async function test() {
	// const levels = await Level.findAll()
	// Utiliser la methode toJSON sur la reponse de sequelize pour afficher les resultats de maniere plus "friendly"
	// console.log(levels.map(level => level.toJSON()));
	// (Autonomie) Listes differentes requetes a effectuees:
	// 1) Creation et ajout d'un nouveau niveau appele 'Ultra' en BDD
	// Ici le level va se creer peu importe ce qui existe deja (donc on va avoir des doublons)
	// const ultra = Level.create({ name: 'Ultra' })
	// On aurait pu passer par le methode findOrCreate pour ne creer l'element que si il n'existe pas deja
	// const ultra = Level.findOrCreate({name: 'Ultra'})
	// 2) Recuperer uniquement le niveau qui possede l'id 3
	// const lvl3 = await Level.findByPk(3);
	// On aurait pu utiliser findOne mais dans ce cas on est pas certain de recevoir le bon enregistrement (par exemple si plusieurs enregistrement ont le meme nom, on recevra toujours le premier)
	// Level.findOne({where: {
	//     name: 'Ultra'
	// }})
	// if (lvl3) {
	//     // 3) Modifier ce niveau pour changer son nom avec ce que vous voulez
	//     console.log(lvl3.toJSON())
	//     // On modifie la propriete que l'on souhaite
	//     lvl3.name = 'ce que je veux';
	//     // Et on vient la sauvegarder
	//     lvl3.save();
	// } else {
	//     console.log('Aucun enregistrement en base')
	// }
	// // 4) Lister tous les niveaux qui contiennent la lettre 'a' (insensible a la casse)
	// const lvlWithLetterA = await Level.findAll({
	//     where: {
	//         name: {
	//             [Op.iLike]: '%a%'
	//         }
	//     }
	// })
	// console.log(lvlWithLetterA.map(lvl => lvl.toJSON()))
	// const firstQuiz = await Quiz.findOne();
	// console.log(firstQuiz.toJSON());
	// const levelOneWithQuestions = await Level.findOne({
	// 	include: "questions"});
	// console.log(levelOneWithQuestions.toJSON());

	//* Récupérer une QUESTION et inclure son LEVEL :
	const questionWithLvl = await Question.findOne({ include: 'level' });

	// console.log(questionWithLvl.toJSON());

	//* Récupérer un LEVEL et inclure ses QUESTIONS :
	const levelThreeWithQuestions = await Level.findByPk(3, {
		include: 'levelQuestions',
	});

	// console.log(levelThreeWithQuestions.toJSON());

	//* Récupérer un quiz avec toutes ses QUESTION :
	const quizFiveWithQuestions = await Quiz.findByPk(5, { include: 'quizQuestions' });

	// console.log(quizFiveWithQuestions.toJSON());

	//* Récupérer une question et savoir de quel quiz il provient :

	const questionFirstWithQuiz = await Question.findOne({ include: 'quiz' });

	// console.log(questionFirstWithQuiz);

	//* Récupérer Chuck et inclure les quizes qu'il a créé :

	const chuckQuizes = await User.findOne({
		where: {
			firstname: 'Chuck',
		},
		include: 'quizes',
	});

	// console.log(chuckQuizes.toJSON());

	//* Récupérer tous les quizes accompagnés de leur auteur :
	const quizWithAuthor = await Quiz.findAll({ include: 'author' });

	// console.log(quizWithAuthor.map(quizWithAuthor.toJSON()));

	//* Récupérer un quiz en incluant ses thèmes :
	const quizWithTags = await Quiz.findByPk(14, {
		include: 'tags',
	});

	// console.log(quizWithTags.toJSON());

	//* Récupérer un thème en incluant les quizes associés

	//* Récupérer toutes les propositions à la première question

	//* Récupérer la question à partir d'une proposition

	//* Récupérer la bonne réponse à la 10e question

	//* À partir d'une BONNE reponse, récupérer la question auquelle elle répond
}

test();
