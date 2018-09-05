var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// List of API
router.get ('/test2', cbGetTest2);

function cbGetTest2 (req, res) {
    var flagA = 5;

    if(flagA = 10) {
        console.log ("Why are we here!");
    }
    else {
        console.log ("We cant reach this part");
    }

    res.send ({status:"OK"});
}

module.exports = router;
