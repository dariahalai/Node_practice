const Book = require("../models/bookModel");

const getBooks = async (req, res) => {
  try {
    const data = await Book.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: "server error" });
  }
};

const addBook = async (req, res) => {
  try {
    const newBook = Book.create(req.body);
    res.status(201).send(newBook);
  } catch (error) {
    res.status(500).send({ message: "server error" });
  }
};

module.exports = { getBooks, addBook };
