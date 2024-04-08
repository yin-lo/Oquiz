const { Sequelize } = require('sequelize');
require('dotenv/config');

// Option 1: Passing a connection URI
const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
}) // Example for postgres

// Fonction possible pour tester la connexion a sequelize
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

// testConnection()

module.exports = sequelize;