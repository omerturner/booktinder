var Books = require('../model/books');
var Users = require('../model/users');

module.exports.getBooks = function (req, res) {
  Books.find({}, function (err, results) {
    res.json(results);
  });
};

module.exports.insert = function (req, res) {
  Books.create(req.body, function (err, results) {
    res.json(results);
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  });
};

function updateBooksDB(request, response, bookOptions) {
  bookID = request.body['bookID'];
  Books.update({ _id: bookID }, bookOptions ,function (err, results) {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  });
};

function updateUsersDB(request, response, userOptions) {
  userID = request.body['userID'];
  Users.update({ _id: userID }, userOptions ,function (err, results) {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  });
};

module.exports.updateLike = function (req, res) {
  var bookOptions = {
    $addToSet: { usersLiked: req.body['userID'] },
    $pull: { usersUnLiked: req.body['userID'] }
  };
  var userOptions = {
    $addToSet: { booksLiked: req.body['bookID'] },
    $pull: { booksUnLiked: req.body['bookID'] }
  };
  updateBooksDB(req, res, bookOptions);
  updateUsersDB(req, res, userOptions);
};

module.exports.updateUnLike = function (req, res) {
  var bookOptions = {
    $addToSet: { usersUnLiked: req.body['userID'] },
    $pull: { usersLiked: req.body['userID'] }
  };
  var userOptions = {
    $addToSet: { booksUnLiked: req.body['bookID'] },
    $pull: { booksLiked: req.body['bookID'] }
  };
  updateBooksDB(req, res, bookOptions);
  updateUsersDB(req, res, userOptions);
};

module.exports.updateNotRead = function (req, res) {
  var bookOptions = {
    $pull: { usersUnLiked: req.body['userID'],  usersLiked: req.body['userID'] }
  };
  var userOptions = {
    $pull: { booksUnLiked: req.body['bookID'],  booksLiked: req.body['bookID'] }
  };
  updateBooksDB(req, res, bookOptions);
  updateUsersDB(req, res, userOptions);
};