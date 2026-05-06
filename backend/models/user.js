const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  course: String,
  paid: { type: Boolean, default: false },
  startDate: Date
});

module.exports = mongoose.model("User", UserSchema);