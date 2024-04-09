const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../database/sequelize');
// const Question = require('./Question');

class Answer extends Model {}

Answer.init(
	{ description:{
		type: DataTypes.TEXT,
		allowNull: false,
	},

	questionId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		// references: {
		// 	model: Question,
		// 	key: 'id',
		// },
	},

	}, {
		sequelize,
		tableName: 'answer',
		underscored: true,
	}
);

module.exports = Answer;