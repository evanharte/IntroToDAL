// a connection pool allows you to have multiple connections to the database so that not everybody has a connection to the database at the same time
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "keyin",
  host: "localhost",
  database: "dvdrental",
  password: "keyin2024",
  port: 5432,
});
module.exports = pool;
