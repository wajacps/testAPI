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


    res.send ({status: "DONE"});
}

module.exports = router;
