var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/home', function(req, res, next){
  res.render('home');
});

router.get('/registro', function(req, res, next){
  res.render('registro');
});

router.get('/login', function(req, res, next){
  res.render('login');
});

router.post('/',function(req, res, next){
  res.render('home');
});

module.exports = router;
