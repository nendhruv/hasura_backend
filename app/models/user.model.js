const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    first_name: String, 
    last_name: String, 
    email_id: String, 
    mobile_number: String,
    is_active: Boolean,
    password: String
  })
);

module.exports = User;