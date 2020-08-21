var express = require('express');
var router = express.Router();
var Authtoken = require('./TokenVerification');

/* GET home page. */
router.get('/', Authtoken, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
