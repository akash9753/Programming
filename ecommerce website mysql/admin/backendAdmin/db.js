const mysql = require('mysql2')
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'ecommerce',
    password : '123456789',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
  module.exports = pool