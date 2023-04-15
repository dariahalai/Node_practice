const express = require("express");
const {
  getBooks,
  addBook,
  getBookById,
  deleteBook,
  updateBook,
  updateStatusBook,
} = require("../controllers/booksController");
const {
  booksValidator,
  putBookValidator,
  patchBookStatusValidator,
} = require("../utils/booksValidator");

const booksRouter = express.Router();

booksRouter.get("/", getBooks);
booksRouter.get("/:id", getBookById);
booksRouter.post("/", booksValidator, addBook);
booksRouter.delete("/:id", deleteBook);
booksRouter.put("/:id", putBookValidator, updateBook);
booksRouter.patch("/:id/isRead", patchBookStatusValidator, updateStatusBook);

module.exports = booksRouter;
