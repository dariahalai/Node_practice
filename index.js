const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const booksRouter = require("./routers/booksRouter");
require("dotenv").config();

const PORT = 3000;

const runServer = async () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(morgan("tiny"));
  app.use("/api/books", booksRouter);
  try {
    await mongoose.connect(process.env.DB_HOST);
    app.listen(PORT, () => {
      console.log("server is running on port", PORT);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runServer();
