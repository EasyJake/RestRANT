// models/comment.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  author: { type: String, default: 'Anonymous' },
  rant: { type: Boolean, default: false },
  stars: { type: Number, required: true, min: 0.5, max: 5, validate: {
    validator: Number.isInteger,
    message: props => `${props.value} is not a valid star rating. Must be a 0.5 increment.`
  }},
  content: { type: String, default: '' }
});

const Comment = mongoose.model('Comment', commentSchema);

// module.exports = Comment;



// const mongoose = require('mongoose')

// let commentSchema = new mongoose.Schema()

module.exports = mongoose.model('Comment', commentSchema)
