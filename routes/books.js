var express = require('express');
var router = express.Router();
var Book = require("../models").Book;
// Book.findAll().then(books => {
//   console.log(books);
// });

// POST created book
router.post("/new", function(req, res, next) {
  Book.create(req.body).then(function(book){
    res.redirect("/books/all");
  }).catch(function(error){
    res.send(500, error);
  });
});

router.get('/all', function(req, res, next) {
  Book.findAll({attributes: ['id', 'title', 'author', 'genre', 'first_published']}).then(function(books){
    res.render("books/index", {books: books, title: "All Books" });
  }).catch(function(error){
      res.send(500, error);
   });
  //res.render("books/index", {title: "Books" });
});

// router.get('/new', function(req, res, next){
//   res.render("books/new", { title: "New Books" });
// });

router.get('/new', function(req, res, next){
  res.render("books/new", {book: {}, title: "New Books" });
});

// router.get('/all', (req, res, next) => {
//   res.render("books/index", {title: "Books" });
// });

router.get('/overdue', function(req, res, next){
  res.render("books/overdue", {title: "Books" });
});

router.get('/checked', function(req, res, next){
  res.render("books/checked", {title: "Books" });
});

router.get('/detail', function(req, res, next){
  res.render("books/detail", {title: "Books" });
});

module.exports = router;
