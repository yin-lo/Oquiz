const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../database/sequelize');

class Level extends Model {}

Level.init(
	{
		// Model attributes are defined here
		name: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},
	{
		// Other model options go here
		sequelize, // We need to pass the connection instance
		// modelName: 'Level', // We need to choose the model name if not specified it will take the name of the class
		tableName: 'level',
	}
);

module.exports = Level;
