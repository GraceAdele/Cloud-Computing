const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  hashtag: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  URL: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("posts", PostSchema);
