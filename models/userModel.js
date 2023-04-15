const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      default: null,
    },
  },
  {
    methods: {
      setPassword: async function (password) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
      },
      comparePassword: async function (password) {
        return await bcrypt.compare(this.password, password);
      },
    },
  },
  { versionKey: false, timestamps: false }
);

const User = model("user", userSchema);

module.exports = User;
