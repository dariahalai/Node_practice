const express = require("express");
const {
  getContacts,
  addContact,
  removeContact,
  updateContact,
} = require("../controllers/booksController");
const {
  contactValidator,
  putContactValidator,
  // patchBookStatusValidator,
} = require("../utils/contactValidator");

const contactsRouter = express.Router();

contactsRouter.get("/", getContacts);
// contactsRouter.get("/:id", getBookById);
contactsRouter.post("/", contactValidator, addContact);
contactsRouter.delete("/:id", removeContact);
contactsRouter.put("/:id", putContactValidator, updateContact);
// contactsRouter.patch("/:id/isRead", patchBookStatusValidator, updateStatusBook);

module.exports = contactsRouter;
