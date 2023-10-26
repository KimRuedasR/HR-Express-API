const mysql = require("mysql");
const util = require("util");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "hrmanagement",
  password: "hrmanagement",
  database: "hrmanagement",
});

pool.query = util.promisify(pool.query);
module.exports = pool;
