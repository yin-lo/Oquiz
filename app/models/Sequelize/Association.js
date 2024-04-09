const sequelize = require('../../database/sequelize');
const Answer = require('./Answer');

const Level = require('./Level');

const Question = require('./Question');

const Quiz = require('./Quiz');

const Tag = require('./Tag');

const User = require('./User');

// function applyAssociations(sequelize) {
//* question - level = O:M :
//"One level has many questions"
Level.hasMany(Question, {
	foreignKey: 'level_id',
	as: 'levelQuestions',
});
// "Each question belongs to a single level"
Question.belongsTo(Level, {
	foreignKey: 'level_id',
	as: 'level',
});

//==========================

//* quiz - question = O:M :
// "One quiz has many questions"
Quiz.hasMany(Question, {
	foreignKey: 'quiz_id',
	as: 'quizQuestions',
});
// "Each question belongs to a single quiz"
Question.belongsTo(Quiz, {
	foreignKey: 'quiz_id',
	as: 'quiz',
});

//==========================

//* answer - question = O:M :
// "One question has many answers"
Question.hasMany(Answer, {
	foreignKey: 'question_id',
	as: 'answers',
});
// "Each answer belongs to a single question"
Answer.belongsTo(Question, {
	foreignKey: 'question_id',
	as: 'question'
});

//==========================

//* answer - question = O:O :
Answer.hasOne(Question, {
	foreignKey: 'answer_id',
	as: 'questionAnswered'
});
Question.belongsTo(Answer, {
	foreignKey: 'answer_id',
	as: 'goodAnswer'
});

//==========================

//* quiz - user = O:M :
// " One user has many quiz"
User.hasMany(Quiz, {
	foreignKey: 'author_id',
	as: 'quizes'
});
// "Each quiz belongs to a single user"
Quiz.belongsTo(User, {
	foreignKey: 'author_id',
	as: 'author'
}),

//==========================

//* quiz - tag = M:M :
	Quiz.belongsToMany(Tag, {
		through: 'quiz_has_tag',
		foreignKey: 'quiz_id',
		otherKey: 'tag_id',
		as: 'tags'
	});
	Tag.belongsToMany(Quiz, {
		through: 'quiz_has_tag',
		foreignKey: 'tag_id',
		otherKey: 'quiz_id',
		as: 'tagQuizes'
	});
// };

module.exports = { Answer, Level, Question, Quiz, Tag, User }

// module.exports = applyAssociations(sequelize);

// async function test() {
// 	const levelOneWithQuestions = await Level.findOne({
// 		include: {
// 			association: 'levelQuestions',
// 			attributes: ['description', 'id'],
// 		},
// 	});

// 	console.log(levelOneWithQuestions.toJSON());
// }

// test();
