const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: [true, "UserID is required(UID/EID)"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 3 characters long"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    unique: true,
    lowercase: true,
  },
  role: {
    type: String,
    enum: ["student", "teacher"],
    required: [true, "Role is required"],
    lowercase: true,
  },
});
const Users = mongoose.model("Users", userSchema);

module.exports = Users;