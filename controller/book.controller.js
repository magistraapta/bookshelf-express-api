const { bookModel } = require('../models/book.model');

// get all book from database
async function getAllBook(req, res) {
  try {
    const book = await bookModel.find();
    return res.status(200).json({
      message: 'Success',
      data: book,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}

// get book with specific id
async function getBookById(req, res) {
  try {
    //getting the id of the book from parameter
    const { id } = req.params;

    //getting id of the book from the database
    const book = await bookModel.findById(id);

    // check if the id is exist
    if (!book) {
      return res.status(400).json({
        message: 'Book not found',
      });
    }

    return res.status(200).json({
      message: 'Success',
      data: book,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}

async function addBook(req, res) {
  try {
    const { name, author, genre, published } = req.body;
    if (!name || !author || !genre || !published) {
      return res.status(400).json({
        message: 'Please complete the identity of the book',
      });
    }

    const books = await bookModel({ name, author, genre, published }).save();
    return res.status(200).json({
      message: 'Success',
      data: books,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}

async function updateBook(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        message: 'Book not found',
      });
    }

    const { name, author, genre, published } = req.body;
    const checkBook = await bookModel.findById(id);
    if (!checkBook) {
      return res.status(400).json({
        message: 'Book is not found',
      });
    }
    const book = await bookModel.findByIdAndUpdate(id, {
      name,
      author,
      genre,
      published,
    });

    if (book) {
      return res.status(200).json({
        message: 'Success update the book',
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}

async function deleteBook(req, res) {
  try {
    const { id } = req.params;

    const checkBook = await bookModel.findById(id);
    if (!checkBook) {
      return res.status(400).json({
        message: 'Book not found',
      });
    }

    const book = await bookModel.findByIdAndDelete(id);
    if (book) {
      return res.status(200).json({
        message: 'Success delete the book',
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}

module.exports = { getAllBook, getBookById, addBook, updateBook, deleteBook };
