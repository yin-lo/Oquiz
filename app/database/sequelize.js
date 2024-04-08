const { Sequelize } = require('sequelize');
require('dotenv/config');

// Option 1: Passing a connection URI
const sequelize = new Sequelize(process.env.PG_URL, {
	define: {
		underscored: true,
		// createdAt: 'created_at',
		// updatedAt: 'updated_at',
	},
});

module.exports = sequelize;
