const express = require("express");
const {
  userSignupValidator,
  userLoginValidator,
} = require("../utils/userValidator");
const {
  signup,
  login,
  logout,
  currentUser,
} = require("../controllers/userController");
const authRouter = express.Router();

authRouter.post("/signup", userSignupValidator, signup);
authRouter.post("/login", userLoginValidator, login);
authRouter.post("/logout", logout);
authRouter.get("/current", currentUser);

module.exports = authRouter;
