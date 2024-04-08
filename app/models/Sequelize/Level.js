const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../database/sequelize');

class Level extends Model {}

Level.init(
	{
		// Inutile de preciser l'id, le created_at ou le updated_at sequelize le gere deja pour nous
		// ATTENTION: peut etre que le champ updatedAt et createdAt n'a pas le meme nom dans sequelize que dans notre bdd

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
