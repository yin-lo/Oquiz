const Answer = require('../models/Sequelize/Answer');

const Level = require('../models/Sequelize/Level');

const Question = require('../models/Sequelize/Question');

const Quiz = require('../models/Sequelize/Quiz');

const Tag = require('../models/Sequelize/Tag');

const User = require('../models/Sequelize/User');

function applyAssociations(sequelize) {
	//* question - level = O:M :
	//"One level has many questions"
	Level.hasMany(Question, {
		foreignKey: 'level_id',
	});
	// "Each question belongs to a single level"
	Question.belongsTo(Level);

	//==========================

	//* quiz - question = O:M :
	// "One quiz has many questions"
	Quiz.hasMany(Question, {
		foreignKey: 'quiz_id',
	});
	// "Each question belongs to a single quiz"
	Question.belongsTo(Quiz);

	//==========================

	//* answer - question = O:M :
	// "One question has many answers"
	Question.hasMany(Answer, {
		foreignKey: 'answer_id',
	});
	// "Each answer belongs to a single question"
	Answer.belongsTo(Question);

	//==========================

	//* answer - question = O:O : 
	Answer.hasOne(Question, {
		foreignKey: 'question_id',
	});
	Question.belongsTo(Answer);

	//==========================

	//* quiz - user = O:M :
	// " One user has many quiz"
	User.hasMany(Quiz, {
		foreignKey: 'author_id',
	});
	// "Each quiz belongs to a single user"
	Quiz.belongsTo(User),

	//==========================

	//* quiz - tag = M:M :
	Quiz.belongsToMany(Tag);
	Tag.belongsToMany(Quiz);
};
