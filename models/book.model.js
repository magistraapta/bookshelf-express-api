const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  published: { type: Number, required: true },
});

const bookModel = mongoose.model('books', bookSchema);

module.exports = { bookModel };
