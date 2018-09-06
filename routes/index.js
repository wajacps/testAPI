var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// List of API
router.get ('/test2', cbGetTest2);

// Implementation for callback
function cbGetTest2 (req, res) {

    var query = 'SELECT * table1 WHERE id = ${req.body.id}';

//    res.send ({status: "DONE"});
    res.redirect (req.body.url);
}

module.exports = router;
