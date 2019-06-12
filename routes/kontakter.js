var express = require('express');
var router = express.Router();

// POstgreSQL
// Last inn PostgreSQL-driveren og opprett en tilkobling til en eksisterende PostgreSQL-server
// var db = require('pg');
// var dbConnection = "postgres://kurs:kurs123@s1.itfakultetet.no:5432/hr";

// Her er koden som henter data og sender dem til ejs-malen

router.get('/delete/:person_id', function (req, res, next) {

    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 's1.itfakultetet.no',
        user: 'kurs',
        password: 'kurs123',
        database: 'kontakter'
    });

    connection.connect();

    var query = "delete from person where person_id ="+req.params.person_id;

    connection.query(query, function (err, result, fields) {
        if (err) {
            console.log("Kontakten ble ikke slettet");
            res.end();
            next();
        } else {
            res.end();
       }
    });

});

router.get('/', function (req, res, next) {

    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 's1.itfakultetet.no',
        user: 'kurs',
        password: 'kurs123',
        database: 'kontakter'
    });

    connection.connect();

    var query = "select person_id as ID, concat(fornavn,' ',etternavn) as Navn, epost as Epost, tel as Telefon from person";

    connection.query(query, function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            res.render('kontakter.ejs', {
                title: 'Kontakter',
                kontakter: result
            });
            res.end();
        }
    });

});

module.exports = router;