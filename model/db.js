const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'itfakultetet.no',
    user: 'kurs4',
    password: 'kurs123',
    database: 'kurs4'
});
connection.connect();
console.log("connected...");
module.exports.connection = connection;