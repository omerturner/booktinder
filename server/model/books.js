var mongoose = require('mongoose');

module.exports = mongoose.model('books', {
  title: String,
  author: String,
  category: String,
  img: String,
  description: String,
  usersLiked: [String],
  usersUnLiked: [String],
});