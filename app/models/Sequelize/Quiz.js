const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../database/sequelize');

class Quiz extends Model {}

Quiz.init(
	{
		title: {
			type: DataTypes.TEXT,
			allowNull: false,
		},

		description: {
			type: DataTypes.TEXT,
			allowNull: true,
		},

		author_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references:{
				model: User,
				key: 'id',
			},
		},

	}, {
		sequelize,
		tableName: 'quiz',
	},
);

module.exports = Quiz;