var Books = require('../model/books');

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

function updateDB(request, response, options) {
  bookID = request.body['bookID'];
  userID = request.body['userID'];
  Books.update({ _id: bookID }, options ,function (err, results) {
    response.json(results);
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  });
};

module.exports.updateLike = function (req, res) {
  var options = {
    $addToSet: { usersLiked: req.body['userID'] },
    $pull: { usersUnLiked: req.body['userID'] }
  };
  updateDB(req, res, options);
};

module.exports.updateUnLike = function (req, res) {
  var options = {
    $addToSet: { usersUnLiked: req.body['userID'] },
    $pull: { usersLiked: req.body['userID'] }
  };
  updateDB(req, res, options);
};

module.exports.updateNotRead = function (req, res) {
  var options = {
    $pull: { usersUnLiked: req.body['userID'],  usersLiked: req.body['userID'] }
  };
  updateDB(req, res, options);
};