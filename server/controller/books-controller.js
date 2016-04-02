var Books = require('../model/books');

module.exports.getBooks = function (req, res) {
  Books.find({}, function (err, results) {
    res.json(results);
  });
};

module.exports.insert = function (req, res) {

};

module.exports.updateLike = function (req, res) {
  bookID = req.body['bookID'];
  userID = req.body['userID'];
  Books.update({ _id: bookID },
                         {
                            $addToSet: { usersLiked: userID },
                            $pull: { usersUnLiked: userID }
                          } ,function (err, results) {
    res.json(results);
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  });
};

module.exports.updateUnLike = function (req, res) {
  bookID = req.body['bookID'];
  userID = req.body['userID'];
  Books.update({ _id: bookID },
                         {
                            $addToSet: { usersUnLiked: userID },
                            $pull: { usersLiked: userID }
                          } ,function (err, results) {
    res.json(results);
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  });
};

module.exports.updateNotRead = function (req, res) {
  bookID = req.body['bookID'];
  userID = req.body['userID'];
  Books.update({ _id: bookID },
                         {
                            $pull: { usersUnLiked: userID,  usersLiked: userID }
                          } ,function (err, results) {
    res.json(results);
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  });
};