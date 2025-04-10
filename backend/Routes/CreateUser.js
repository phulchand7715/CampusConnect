const express = require("express");
const router = express.Router();
const User = require("../models/users");

router.post("/createuser", async (req, res) => {
  try {
    await User.create({
      user_id: "23BIS70011",
      name: "phulchand kumar",
      email: "pk6600@gmail.com",
      role: "Student",
    });
    res.send("User Created Suuceessfully.");
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

module.exports = router;
