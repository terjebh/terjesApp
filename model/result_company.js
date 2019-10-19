const db = require('./db');

const connection = db.connection;

// SQL
const query_company= "select firma_id as ID, firmanavn as Firmanavn, epost as Epost, tel as Telefon from firma";

connection.connect();


connection.query(query_company, function (err, result, fields) {
    if (err) {
        throw err;
    } else {
        
        // console.log("Firma:" + result[0].Firmanavn);
        module.exports.result_company = result;
    }
});

