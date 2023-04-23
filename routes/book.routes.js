module.exports = app => {
  const books = require('../controllers/book.controllers');
  const route = require('express').Router();

  route.get('/', books.getAllBooks);
  route.get('/:id', books.getBook);
  route.put('/:id', books.updateBook);
  route.post('/', books.createBook);
  route.delete('/:id', books.deleteBook);

  app.use('/books', route);
};
