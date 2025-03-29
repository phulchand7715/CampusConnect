const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://phulchand1023:Victus%407715@cluster0.6vgbr.mongodb.net/myDatabase"
);
const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "Comment content is required"],
      trim: true,
      minlength: [1, "Comment must be at least 1 characters long"],
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: false } }
); 

CommentSchema.virtual("comment_id").get(function () {
  return this._id;
});

CommentSchema.set("toJSON", { virtuals: true });
CommentSchema.set("toObject", { virtuals: true });

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
