const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./db");
connectDB();
const app = express();

app.listen("3033", () => {
  console.log("Listening at Port 3033");
});
