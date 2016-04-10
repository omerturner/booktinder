var Users = require('../model/users');

module.exports.getSimilarUsers = function (req, res) {
  Users.find({}, function (err, results) {
    res.json(results);
  });
};
