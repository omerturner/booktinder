var mongoose = require('mongoose');

module.exports = mongoose.model('users', {
  username: String,
  booksLiked: [String],
  booksUnLiked: [String]
});