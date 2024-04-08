const client = require("./dbClient");

const dataMapper = {
    async getAllLevels() {
        // Recuperer la liste de mes levels
        const result = await client.query(`SELECT * FROM level`);
        const levels = result.rows // => [{}, ..., {}] 
        return levels;
    },

    async createLevel(obj) {
        await client.query(`
            INSERT INTO "level"
                ("name")
            VALUES
                ($1)
        `, [obj.name])
    }
}

module.exports = dataMapper;