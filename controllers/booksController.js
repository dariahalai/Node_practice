const Book = require("../models/bookModel");

const getBooks = async (req, res) => {
  try {
    const data = await Book.find();
    res.status(200).jon(data);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

const addBook = async (req, res) => {
  try {
    const newBook = Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

const getBookById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const currentBook = await Book.findById(id);
    if (!currentBook) {
      res.status(404).json({ message: "book not found" });
      return;
    }
    res.status(200).json(currentBook);
  } catch (error) {
    res.status(500).send({ message: "server error" });
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteBook = await Book.findByIdAndDelete(id);
    if (!deleteBook) {
      res.status(404).json({ message: "book not found" });
      return;
    }
    res.status(204).json({ message: "book sucessfully delete" });
  } catch (error) {
    res.status(500).send({ message: "server error" });
  }
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const content = req.body;
  try {
    const findBook = await Book.findByIdAndUpdate(id, content, { new: true });
    if (!findBook) {
      res.status(404).json({ message: "book not found" });
      return;
    }
    res.status(200).json(findBook);
  } catch (error) {
    res.status(500).send({ message: "server error" });
  }
};

const updateStatusBook = async (req, res) => {
  const { id } = req.params;
  const content = req.body;
  try {
    const findBook = await Book.findByIdAndUpdate(id, content, { new: true });
    if (!findBook) {
      res.status(404).json({ message: "book not found" });
      return;
    }
    res.status(200).json(findBook);
  } catch (error) {
    res.status(500).send({ message: "server error" });
  }
};

module.exports = {
  getBooks,
  addBook,
  getBookById,
  deleteBook,
  updateBook,
  updateStatusBook,
};
