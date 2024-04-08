const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../database/sequelize');

class Tag extends Model {}

User.init(
	{
		name: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: 'tag',
	}
);

module.exports = Tag;
