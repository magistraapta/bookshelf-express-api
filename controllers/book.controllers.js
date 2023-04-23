const db = require('../models');
const books = db.books;
exports.getAllBooks = (req, res) => {
  books
    .find()
    .then((data) => res.send(data))
    .catch((err) => {
      res.send(err.message).status(500);
    });
};
exports.getBook = (req, res) => {
    const id = req.params.id;
    books
    .findById(id)
    .then((data) => res.send(data))
    .catch((err) => {
      res.send(err.message).status(500);
    }); 
};
exports.updateBook = (req, res) => {};
exports.deleteBook = (req, res) => {
    const id = req.params.id;
    books.findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                res.status(404).send({message: "tidak dapat menghapus data"})
            }
            res.send({message: "data berhasil dihapus"})
        })
        .catch((err) => res.status(500).send({message: err.message}))
};
exports.createBook = (req, res) => {
  books
    .create(req.body)
    .then(() => res.send({ message: 'data berhasil disimpan' }))
    .catch((err) => {
      res.send(err.message).status(500);
    });
};
