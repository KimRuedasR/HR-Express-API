const mysql = require("mysql");
const util = require("util");
const fs = require("fs");

// SSL certificate
const caCert = fs.readFileSync("./certs/DigiCertGlobalRootCA.crt.pem", "utf8");

// Test database configuration, check README.md for more details
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "hr-management-db-server.mysql.database.azure.com",
  user: "hrdbadmin",
  password: "Servicioscloud_420",
  database: "hrmanagement",
  ssl: {
    ca: caCert,
  },
});

pool.query = util.promisify(pool.query);
module.exports = pool;
