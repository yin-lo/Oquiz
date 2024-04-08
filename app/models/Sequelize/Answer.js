const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../database/sequelize');

class Answer extends Model {}

Answer.init(
	{ description:{
		type: DataTypes.TEXT,
		allowNull: false,
	},

	question_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			model: Question,
			key: 'id',
		},
	},

	}, {
		sequelize,
		tableName: 'answer',
	}
);

module.exports = Answer;