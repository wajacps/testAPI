var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// List of API
router.get ('/test1', cbGetTest1);


// Implementation
function cbGetTest1 (req, res) {
  let a = 5;

  if(a == 10) {
    console.log (`a = ${a}`);
  }
  else {
    console.log ("Nothing to show");
  }

  // Lets try SQL
  let theId = req.body.id;
  switch(theId) {
      case 1:
        theId = 1;
        break;

      case 2:
        theId = 2;
        break;

      default:
        theId = 0;
  }

  let query = 'SELECT * FROM table1 WHERE id=' + theId;


  res.send ({status: "OK"});
}

module.exports = router;
