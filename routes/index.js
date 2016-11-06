var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/user1', function(req, res, next) {
  res.render('index', { title: 'Peter' });
});

router.get('/user2', function(req, res, next) {
  res.render('bob', { title: 'Bob' });
})

module.exports = router;
