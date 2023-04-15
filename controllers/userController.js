const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../models/userModel");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const isEmailIncludes = await User.findOne({ email });
    if (isEmailIncludes) {
      res.status(409).json({ message: "email in use" });
      return;
    }
    const newUser = await User.create({ name, email, password });
    newUser.setPassword(newUser.password);
    newUser.save();
    const payload = {
      id: newUser.id,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.EXPIRES_IN,
    });
    const hashedPassword = newUser.password;

    res.status(201).json({
      user: {
        password: hashedPassword,
        email,
        token,
        name,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!password) return res.status(401).json({ message: "Not authorized" });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Not authorized" });

    const payload = {
      id: user.id,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIN: process.env.EXPIRES_IN,
    });

    const loginUser = await user.save();

    res.status(200).json({
      user: {
        loginUser,
        token,
      },
    });
  } catch (error) {
    res.status(500).send({ message: "server error" });
  }
};

const logout = async (req, res) => {
  const user = req.body;
  user.token = null;
  res.status(200).json({ message: "user logout sucessfully" });
};

const currentUser = async (req, res) => {
  const currentUser = req.body;
  res.status(200).json(currentUser);
};
module.exports = { signup, login, logout, currentUser };
