const db = require('./db');
var result_person ="";

// SQL
const query_person = "select person_id as ID, concat(fornavn,' ',etternavn) as Navn, epost as Epost, tel as Telefon from person";

db.connection.query(query_person, async function (err, result, fields) {
    if (err) {
        throw err;
    } else {
        // console.log("Personer:" + result[0].Navn);
        result_person = await result;
    }
});

module.exports.result_person = result_person;
