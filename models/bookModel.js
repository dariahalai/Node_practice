const { Schema, model } = require("mongoose");

const booksSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: (value) => {
      value.includes("http");
    },
  },
  plot: {
    type: String,
    required: true,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
});

const Book = model("book", booksSchema);

module.exports = Book;
