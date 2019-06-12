var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('nykontakt', {
    title: 'Ny Kontakt',
    message: ''
  });
});


router.post('/', function (req, res, next) {

  const fornavn = req.body.fornavn;
  const etternavn = req.body.etternavn;
  const epost = req.body.epost;
  const tel = req.body.tel;

  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: 's1.itfakultetet.no',
    user: 'kurs',
    password: 'kurs123',
    database: 'kontakter'
  });

  connection.connect();

  const query = "INSERT INTO person (fornavn, etternavn, epost, tel)  VALUES ('" + fornavn + "', '" + etternavn + "', '" + epost + "', '" + tel + "')";

  connection.query(query, function (err, result, fields) {

    if (err) {

      console.log("Det gikk galt med innsetting av ny kontakt - " + query);
      connection.end();
    } else {
      connection.end();
      res.render('nykontakt', {
        title: 'Ny Kontakt',
        message: 'Ny kontakt -' + fornavn + ' ' + etternavn + '- lagret'
      });

    };

  });

});

module.exports = router;