let db = require('db');

// SQL
module.exports.query_person = "select person_id as ID, concat(fornavn,' ',etternavn) as Navn, epost as Epost, tel as Telefon from person";
module.exports.query_firma = "select firma_id as ID, firmanavn as Firmanavn, epost as Epost, tel as Telefon from firma";

