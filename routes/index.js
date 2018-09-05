var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// List of API
router.get ('/test2', cbGetTest2);

function cbGetTest2 (req, res) {
    // Example of SQL injection
    let myId = req.body.id;
    let myQuery = `SELECT * FROM table2 WHERE id = ${myId}`;


    // Example of redirect
    res.redirect(req.body.url);
}

module.exports = router;
