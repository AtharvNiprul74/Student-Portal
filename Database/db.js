const mysql2 = require("mysql2"); //imported mysql2

console.log("DB CONFIG CHECK:", {
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
});

const pool = mysql2.createPool({
  //database connection
  host: "localhost",
  user: "root",
  password: "root",
  database: "sunbeam_db",
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool; //exported database
