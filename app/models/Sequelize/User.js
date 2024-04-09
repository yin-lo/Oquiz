const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../database/sequelize');

class User extends Model {}

User.init(
	{
		email: {
			type: DataTypes.TEXT,
			allowNull: false,
			// On veut que l'email soit unique. Sequelize ira verifier avant meme d'essayer de faire un INSERT INTO qu'aucun enregistrement present dans la base ne contienne cet email
			unique: true,
			// On peut egalement valider le type des champs. Ici on ajoute une contrainte dans le setter pour verifier que l'email est bien valide
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				// len: [8, Infinity]
				len: [8, 150],
			},
		},
		firstname: {
			type: DataTypes.TEXT,
		},
		lastname: {
			type: DataTypes.TEXT,
		},
	},
	{
		sequelize,
		tableName: 'user',
	}
);

module.exports = User;
