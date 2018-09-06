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

    // Sanitize it using whitelist
    var myId;
    switch(req.body.id) {
        case 1: myId = 1; break;
        case 2: myId = 2; break;
        default: myId = 0;
    }
    var query = 'SELECT * table1 WHERE id = ${myId}';

//    res.send ({status: "DONE"});
    // Sanitize using whitelist
    var myUrl;
    switch(req.body.url) {
        case 1: myUrl = "https://www.tm.com.my"; break;
        case 2: myUrl = "https://www.tmrnd.com.my"; break;
        default: myUrl = "www.google.com";
    }
    res.redirect (myUrl);
}

module.exports = router;
