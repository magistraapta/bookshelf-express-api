const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  published: { type: Number, required: true },
});

 const bookModel = mongoose.model('books', bookSchema);

 const getAllBook = () => bookModel.find();
 const getBookById = (id) => bookModel.findById(id);
 const createBook = (values) => new bookSchema(values).save().then((book) => book.toObject());
 const deleteBook = (id) => bookModel.findByIdAndDelete(id);
 const updateBook = (id, values) => bookModel.findByIdAndUpdate(id, values);

module.exports = {getAllBook, getBookById,deleteBook,createBook,updateBook, bookModel}