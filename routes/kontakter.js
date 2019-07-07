var express = require('express');
var router = express.Router();

// Her er koden som henter data og sender dem til ejs-malen

let result_firma = [];
let result_person = [];



connection.connect();

connection.query(query_person, function (err, result, fields) {
    if (err) {
        throw err;
    } else {
        // console.log("Personer:" + result[0].Navn);
        result_person = result;
    }
});


connection.query(query_firma, function (err, result, fields) {
    if (err) {
        throw err;
    } else {
        result_firma = result;
        // console.log("Firma:" + result[0].Firmanavn);
    }
});

// connection.end();



router.get('/', async function (req, res, next) {

    // // console.log("Person:" + result_person[0]);
    // console.log("Firma:" + result_firma[0]);


    res.render('kontakter.ejs', {
        title: 'Kontakter',
        kontakter: await result_person,
        firma: await result_firma
    });
    res.end();


});

module.exports = router;