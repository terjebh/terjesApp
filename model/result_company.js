const db = require('./db');
let result_company = "";

// SQL
const query_company= "select firma_id as ID, firmanavn as Firmanavn, epost as Epost, tel as Telefon from firma";

db.connection.query(query_company, async function (err, result, fields) {
    if (err) {
        throw err;
    } else {
        // console.log("Firma:" + result[0].Firmanavn);
        result_company = await result;
    }
});



module.exports.result_company = result_company;