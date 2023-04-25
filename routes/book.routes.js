const { bookModel } = require('../models/book.model');
const route = require('express').Router();

route.get('/', async (req, res) => {
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
});

route.post('/', async (req, res) => {
  const { name, author, genre, published } = req.body;
  const books = new bookModel({ name, author, genre, published });

  try {
    const book = await books.save();
    res.status(200).json({
      message: 'Success',
      data: book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
});

route.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookModel.findById(id);
    if (!id) {
      return res.status(400).json({
        message: 'Data tidak ditemukan',
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
});

route.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const existBook = await bookModel.findById(id);

    if (!existBook) {
      return res.status(400).json({
        message: 'Buku tidak ditemukan',
      });
    }

    const { name, author, genre, published } = req.body;

    if (!name || !author || !genre || !published) {
      return res.status(400).json({
        message: 'Harap lengkapi identitas buku',
      });
    }

    const book = await bookModel.findByIdAndUpdate(id, {
      name,
      author,
      genre,
      published,
    });

    return res.status(200).json({
      message: 'Data berhasil diubah',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
});

route.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const checkBook = await bookModel.findById(id);
    if (!checkBook) {
      return res.status(400).json({
        message: 'Buku tidak ditemukan',
      });
    }

    const book = await bookModel.findByIdAndDelete(id);
    if (book) {
      return res.status(200).json({
        message: 'Berhasil menghapus buku',
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
});
module.exports = route;
