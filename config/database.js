const mysql = require("mysql");
const util = require("util");
// Test database configuration, check README.md for more details
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "hr-management-db-server.mysql.database.azure.com",
  user: "hrdbadmin",
  password: "Servicioscloud_420",
  database: "hrmanagement",
});

pool.query = util.promisify(pool.query);
module.exports = pool;
