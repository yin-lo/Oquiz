const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../database/sequelize');

class Tag extends Model {}

Tag.init(
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
