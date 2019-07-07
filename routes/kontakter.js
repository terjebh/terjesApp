const express = require('express');
const queries = require('../model/queries');
const router = express.Router();

// Her er koden som henter data og sender dem til ejs-malen

let result_company = queries.result_company;
let result_person = queries.result_person;;


router.get('/', async function (req, res, next) {

    // // console.log("Person:" + result_person[0]);
    // console.log("Firma:" + result_firma[0]);


    res.render('kontakter.ejs', {
        title: 'Kontakter',
        kontakter: result_person,
        firma: result_company
    });
    res.end();


});

module.exports = router;