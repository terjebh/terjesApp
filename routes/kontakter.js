const express = require('express');
const person = require('../model/result_person');
const company = require('../model/result_company');
const router = express.Router();

// Her er koden som henter data og sender dem til ejs-malen

// let result_company = queries.result_company;
// let result_person = queries.result_person;;


router.get('/', async function (req, res, next) {

// console.log("Person:" + person.result_person[0]);
// console.log("Firma:" + company.result_firma[0]);


    res.render('kontakter.ejs', {
        title: 'Kontakter',
        kontakter: person.result_person,
        firma: company.result_company
    });
    res.end();


});

module.exports = router;