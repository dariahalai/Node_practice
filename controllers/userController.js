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
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send({ message: "server error" });
  }
};

module.exports = { signup };
