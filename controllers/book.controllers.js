const express = require('express');
const { getAllBook, getBookById, createBook, deleteBook, updateBook } = require('../models/book.model');

export const getAllBook = async (req, res) => {
  try {
    const book = await getAllBook();
    return res.status(200).json({
      message: 'Success',
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export const getBookById = async (req, res) => {
  try {
    const id = req.params;
    const book = await getBookById(id);
    return res.status(200).json({
      message: 'Success',
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export const createBook = async (req, res) => {
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
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const id = req.params;
    const book = await deleteBook(id);
    return res.status(200).json({
      message: 'Success',
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export const updateBook = async (req, res) => {
  try {
    const id = req.params;
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
        message: "Success",
        data: updatedBook
      })
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal error"
    })
  }
};
