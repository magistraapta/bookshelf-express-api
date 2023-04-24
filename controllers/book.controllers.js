const { getAllBook, getBookById, createBook, deleteBook, updateBook } = require('../models/book.model');

const getBook = async (req, res) => {
  try {
    const book = await getAllBook();
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
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: 'ID is required',
      });
    }

    const book = await getBookById(id);
    if (book) {
      return res.status(200).json({
        message: 'Success',
        data: book,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

const addBook = async (req, res) => {
  try {
    const { name, author, genre, published } = req.body;

    if (!name || !author || !genre || !published) {
      res.status(400).json({
        message: 'Harap lengkapi identitas buku terlebih dahulu',
      });
    }

    const book = await createBook({
      name,
      author,
      genre,
      published,
    });

    return res.status(200).json({
      message: 'Buku berhasil ditambah',
      data: book,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

const removeBook = async (req, res) => {
  try {
    const { id } = req.params;

    const existingBook = await getBookById(id);
    if (!existingBook) {
      return res.status(404).json({
        message: 'Book not found',
      });
    }

    const book = await deleteBook(id);

    if (book) {
      return res.status(200).json({
        message: 'Success delete book',
      });
    }

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

const changeBook = async (req, res) => {
  try {
    const { id } = req.params;
    const existedBook = await getBookById(id);
    if (!existedBook) {
      return res.status(404).json({
        message: `Buku dengan id: ${id} tidak ditemukan`,
      });
    }

    const { name, author, published, genre } = req.body;

    const updated = await updateBook(id, {
      name,
      author,
      published,
      genre,
    });

    const updatedBook = await getBookById(id);

    if (updated) {
      return res.status(200).json({
        message: 'Success',
        data: updatedBook,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal error',
    });
  }
};

module.exports = { getBook, getById, addBook, changeBook, removeBook };
