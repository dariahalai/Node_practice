const Contact = require("../models/contactModel");

const getContacts = async (req, res) => {
  try {
    const data = await Contact.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};

const addContact = async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

// const getBookById = async (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   try {
//     const currentBook = await Book.findById(id);
//     if (!currentBook) {
//       res.status(404).json({ message: "book not found" });
//       return;
//     }
//     res.status(200).json(currentBook);
//   } catch (error) {
//     res.status(500).send({ message: "server error" });
//   }
// };

const removeContact = async (req, res) => {
  const { id } = req.params;
  try {
    const removedContact = await Contact.findByIdAndDelete(id);
    if (!removedContact) {
      res.status(404).json({ message: "book not found" });
      return;
    }
    res.status(204).json({ message: "book sucessfully delete" });
  } catch (error) {
    res.status(500).send({ message: "server error" });
  }
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const content = req.body;
  try {
    const findContact = await Contact.findByIdAndUpdate(id, content, {
      new: true,
    });
    if (!findContact) {
      res.status(404).json({ message: "book not found" });
      return;
    }
    res.status(200).json(findContact);
  } catch (error) {
    res.status(500).send({ message: "server error" });
  }
};

// const updateStatusBook = async (req, res) => {
//   const { id } = req.params;
//   const content = req.body;
//   try {
//     const findBook = await Book.findByIdAndUpdate(id, content, { new: true });
//     if (!findBook) {
//       res.status(404).json({ message: "book not found" });
//       return;
//     }
//     res.status(200).json(findBook);
//   } catch (error) {
//     res.status(500).send({ message: "server error" });
//   }
// };

module.exports = {
  getContacts,
  addContact,
  removeContact,
  updateContact,
};
