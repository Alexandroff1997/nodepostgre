const { Pool } = require('pg');

const pool = new Pool({
	user: 'alex1997',
	password: 'ads132',
	host: 'localhost',
	port: '5432',
	database: 'nodepostgre',
});

module.exports = pool;

