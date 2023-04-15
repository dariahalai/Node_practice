const express = require("express");
const { userSignupValidator } = require("../utils/userValidator");
const { signup } = require("../controllers/userController");
const authRouter = express.Router();

authRouter.post("/signup", userSignupValidator, signup);
// authRouter.post("/signin");
// authRouter.post("/exit");
// authRouter.get("/current");

module.exports = authRouter;
