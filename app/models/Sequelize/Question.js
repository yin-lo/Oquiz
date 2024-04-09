const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../database/sequelize');
// const Level = require('./Level');
// const Answer = require('./Answer');
// const Quiz = require('./Quiz');

class Question extends Model {}

Question.init(
	{
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},

		anecdote: {
			type: DataTypes.TEXT,
			allowNull: true,
		},

		wiki: {
			type: DataTypes.TEXT,
			allowNull: true,
		},

		levelId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			// references: {
			// 	model: Level,
			// 	key: 'id',
			// },
		},
		answerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			// references: {
			// 	model: Answer,
			// 	key: 'id',
			// },
		},
		quizId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			// references: {
			// 	model: Quiz,
			// 	key: 'id',
			// },
		},
	},
	{
		sequelize,
		tableName: 'question',
		underscored: true,
	}
);

module.exports = Question;
