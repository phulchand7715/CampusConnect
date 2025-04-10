const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://phulchand1023:Victus%407715@cluster0.6vgbr.mongodb.net/myDatabase";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected...");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
