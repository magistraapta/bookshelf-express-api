const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  published: { type: Number, required: true },
});

export const bookModel = mongoose.model('books', bookSchema);
export const getAllBook = () => bookModel.find();
export const getBookById = (id) => bookModel.findById(id);
export const createBook = (values) => new bookSchema(values).save().then((book) => book.toObject());
export const deleteBook = (id) => bookModel.findByIdAndDelete(id);
export const updateBook = (id, values) => bookModel.findByIdAndUpdate(id, values);
