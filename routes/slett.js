
var express = require('express');
var router = express.Router();

// Her er koden som sletter en kontakt

router.get('/:person_id', function (req, res, next) {


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
        res.send("OOOps... Kontakten ble ikke slettet");
        console.log("Kontakten ble ikke slettet");
        res.end();
    } else {
        res.send("Kontakten ble slettet");
        res.end();
   }
});

});

module.exports = router;