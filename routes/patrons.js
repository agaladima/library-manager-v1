var express = require('express');
var router = express.Router();
var Patron = require("../models").Patron;

router.get('/', function(req, res, next) {
  res.render("patrons/index", {title: "Patrons" });
});

router.get('/new', function(req, res, next){
  res.render("patrons/new", {title: "Patrons" });
});

router.get('/all', (req, res, next) => {
  res.render("patrons/index", {title: "Patrons" });
});

router.get('/detail', function(req, res, next){
  res.render("patrons/detail", {title: "Patrons" });
});

module.exports = router;
