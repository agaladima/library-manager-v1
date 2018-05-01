var express = require('express');
var router = express.Router();
var Book = require("../models").Book;

var book = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher/'s Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    first_published: 1997
  },
  {
    id: 1,
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    genre: "Fantasy",
    first_published: 1998
  },
];

router.get('/', function(req, res, next) {
  Book.findAll({attributes: ['id', 'title', 'author', 'genre', 'first_published']}).then(function(books){
    res.render("books/index", {books: books, title: "All Books" });
  }).catch(function(error){
      res.send(500, error);
   });
  //res.render("books/index", {title: "Books" });
});

router.get('/new', function(req, res, next){
  res.render("books/new", {title: "Books" });
});

router.get('/all', (req, res, next) => {
  res.render("books/index", {title: "Books" });
});

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
