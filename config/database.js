const mysql = require("mysql");
const util = require("util");
// Test database configuration, check README.md for more details
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "hrmanagement",
  password: "",
  database: "hrmanagement",
});

pool.query = util.promisify(pool.query);
module.exports = pool;
