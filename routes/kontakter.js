var express = require('express');
var router = express.Router();

// Her er koden som henter data og sender dem til ejs-malen

let result_firma;
let result_person;

var query_person = "select person_id as ID, concat(fornavn,' ',etternavn) as Navn, epost as Epost, tel as Telefon from person";
var query_firma = "select firma_id as ID, firmanavn as Firmanavn, epost as Epost, tel as Telefon from firma";

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 's1.itfakultetet.no',
    user: 'kurs',
    password: 'kurs123',
    database: 'kontakter'
});

connection.connect();

connection.query(query_person, function (err, result, fields) {
    if (err) {
        throw err;
    } else {
        console.log("Personer:" + result[0].Navn);
        result_person = result;
    }
});


connection.query(query_firma, function (err, result, fields) {
    if (err) {
        throw err;
    } else {
        this.result_firma = result;
        console.log("Firma:" + result[0].Firmanavn);
    }
});

connection.end();


console.log("Person:" + result_person[0]);


router.get('/', function (req, res, next) {



    res.render('kontakter.ejs', {
        title: 'Kontakter',
        kontakter: result_person,
        firma: result_firma
    });
    res.end();


});

module.exports = router;