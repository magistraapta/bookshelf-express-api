const books = require('../controllers/book.controllers');
const route = require('express').Router();

route.get('/', books.getBook);
route.get('/:id', books.getById);
route.post('/', books.addBook);
route.put('/:id', books.changeBook);
route.delete('/:id', books.removeBook);

module.exports = route;

// module.exports = app => {
//   const books = require('../controllers/book.controllers');
//   const route = require('express').Router();

//   route.get('/', books.getAllBook);
//   route.get('/:id', books.getBookById);
//   route.put('/:id', books.updateBook);
//   route.post('/', books.createBook);
//   route.delete('/:id', books.deleteBook);

//   app.use('/books', route);
// };
