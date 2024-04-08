const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../database/sequelize');

class Tag extends Model {}

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

		level_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Level,
				key: 'id',
			},
		},
		answer_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Answer,
				key: 'id',
			},
		},
		quiz_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Quiz,
				key: 'id',
			},
		},
	},
	{
		sequelize,
		tableName: 'question',
	}
);

module.exports = Question;
