var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// List of API
router.get ('/test2', cbGetTest2);

function cbGetTest2 (req, res) {
    var abcd = 5;
    var test = `SELECT * FROM tableX WHERE id = ${req.body.id}`;


    res.send ({status:"OK"});
}

module.exports = router;
