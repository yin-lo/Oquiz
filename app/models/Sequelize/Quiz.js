const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../database/sequelize');
// const User = require('./User');

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

		authorId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			// references:{
			// 	model: User,
			// 	key: 'id',
			// },
		},

	}, {
		sequelize,
		tableName: 'quiz',
		underscored: true,
	},
);

module.exports = Quiz;