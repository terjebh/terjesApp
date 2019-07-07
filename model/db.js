const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 's1.itfakultetet.no',
    user: 'kurs',
    password: 'kurs123',
    database: 'kontakter'
});

module.exports.connection = connection;