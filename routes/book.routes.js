const book = require('../controller/book.controller')
const route = require('express').Router();

route.get('/', book.getAllBook);

route.post('/', book.addBook);

route.get('/:id', book.getBookById);

route.put('/:id', book.updateBook);

route.delete('/:id', book.deleteBook);

module.exports = route;
