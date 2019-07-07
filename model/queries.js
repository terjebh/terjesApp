const db = require('../model/db');

const connection = db.connection;

// SQL
const query_person = "select person_id as ID, concat(fornavn,' ',etternavn) as Navn, epost as Epost, tel as Telefon from person";
const query_company= "select firma_id as ID, firmanavn as Firmanavn, epost as Epost, tel as Telefon from firma";

connection.connect();

connection.query(query_person, function (err, result, fields) {
    if (err) {
        throw err;
    } else {
        // console.log("Personer:" + result[0].Navn);
        module.exports.result_person = result;
    }
});


connection.query(query_company, function (err, result, fields) {
    if (err) {
        throw err;
    } else {
        
        // console.log("Firma:" + result[0].Firmanavn);
        module.exports.result_company = result;
    }
});

