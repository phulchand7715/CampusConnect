const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./db");
connectDB();
const app = express();

app.use(express.json());

app.use("/", require("./../Routes/CreateUser"));

app.listen("3033", () => {
  console.log("Listening at Port 3033");
});
