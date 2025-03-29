const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://phulchand1023:Victus%407715@cluster0.6vgbr.mongodb.net/myDatabase"
);

const postSchema = new mongoose.Schema({
  post_id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: [true, "Title is required"],
    unique: true,
    trim: true,
    minlength: [5, "Title must be at least 5 characters long"],
    maxlength: [100, "Title cannot exceed 100 characters"],
  },
  content: {
    type: String,
    required: [true, "Content is required"],
    trim: true,
    minlength: [20, "Content must be at least 20 characters long"],
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ID is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;
