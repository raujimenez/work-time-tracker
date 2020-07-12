require('dotenv').config()
const config = process.env
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: config.DB_HOST,
    port: config.DB_PORT,
    database: config.DB_NAME,
    user: config.DB_USER,
    password: config.DB_PASSWORD
});

connection.connect( (err) => {
    if (err) {
        console.log(`failed to connect to ${config.DB_HOST}`);
        return;
    }
    console.log(`connection to ${config.DB_NAME} established`);
    console.log(`Logged in as ${config.DB_USER}`);
})

module.exports = connection;