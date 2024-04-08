const pg = require('pg');
require('dotenv/config');

// protocol://user:password@host:port/dbName
const client = new pg.Client(process.env.PG_URL);

client.connect();

module.exports = client;