const express = reqoire("express");
const { getBooks, addBook } = require("../controllers/booksController");

const booksRouter = express.Router();

booksRouter.get("/", getBooks);
booksRouter.get("/:id");
booksRouter.post("/", addBook);
booksRouter.delete("/:id");
booksRouter.put("/:id");

module.exports = booksRouter;
