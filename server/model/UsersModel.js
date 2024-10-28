const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unqiue: true,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male,Female"],
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("users", UserSchema);
