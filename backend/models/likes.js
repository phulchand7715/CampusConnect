const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  user_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  post_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Post", 
    required: true 
  }
}, { timestamps: true }); 


const Likes = mongoose.model("Likes", likeSchema);

module.exports = Likes;