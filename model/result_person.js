const db = require('./db');
var result_person ="";
const connection = db.connection;

// SQL
const query_person = "select person_id as ID, concat(fornavn,' ',etternavn) as Navn, epost as Epost, tel as Telefon from person";

connection.connect();

connection.query(query_person, function (err, result, fields) {
    if (err) {
        throw err;
    } else {
        // console.log("Personer:" + result[0].Navn);
        result_person = result;
    }
});

module.exports.result_person = result_person;
