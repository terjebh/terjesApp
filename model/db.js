const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 's1.itfakultetet.no',
    user: 'kurs',
    password: 'kurs123',
    database: 'kontakter'
});
connection.connect();
console.log("connected...");
module.exports.connection = connection;