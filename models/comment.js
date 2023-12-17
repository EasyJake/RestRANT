// models/comment.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  author: {
    type: String,
    default: 'Anonymous'
  },
  rant: {
    type: Boolean,
    default: true
  },
  stars: {
    type: Number,
    required: true,
    min: 0.5,
    max: 5
  },
  content: {
    type: String,
    default: ''
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
