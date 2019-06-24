var express = require('express');
var router = express.Router();

// Her er koden som henter data og sender dem til ejs-malen

    

router.get('/', async function (req, res, next) {

    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 's1.itfakultetet.no',
        user: 'kurs',
        password: 'kurs123',
        database: 'kontakter'
    });
    
    connection.connect();
    
    var query_person = "select person_id as ID, concat(fornavn,' ',etternavn) as Navn, epost as Epost, tel as Telefon from person";
    var query_firma = "select firma_id as ID, firmanavn as Firmanavn, epost as Epost, tel as Telefon from firma";
var result_firma;
    await connection.query(query_person, function (err, result, fields) {
        if (err) {
            throw err;
        } else {
            
            result_person = this.result;
//            console.log("Personer:"+ result[0].Navn);
            

        }
    });
  

     connection.query(query_firma, async function (err, result, fields) {
        if (err) {
            throw err;
        } else {
           console.log("Firma:"+result[0].Firmanavn);
          result_firma = await result;
        }
    });
   
    await console.log("ResultFirma:"+  result_firma);
      
    
    // res.render('kontakter.ejs', {
    //     title: 'Kontakter',
    //     kontakter: result_person,
    //     firma: result_firma
    // });
    // res.end();



connection.end();    
});

module.exports = router;