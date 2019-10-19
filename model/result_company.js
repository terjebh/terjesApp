const db = require('./db');
let result_company = "";
const connection = db.connection;

// SQL
const query_company= "select firma_id as ID, firmanavn as Firmanavn, epost as Epost, tel as Telefon from firma";

connection.connect();

connection.query(query_company, function (err, result, fields) {
    if (err) {
        throw err;
    } else {
        // console.log("Firma:" + result[0].Firmanavn);
        result_company = result;
    }
});

module.exports.result_company = result_company;