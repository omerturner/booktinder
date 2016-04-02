'use strict';

angular.module('mainApp')
.controller('booksCtrl', function($scope, dataService) {

  $scope.userID = "56ff918544ae2660d9cb2a8c"

  dataService.getBooks(function(response) {
    $scope.books = response.data;
    $scope.getBook();
  });

  $scope.getBook = function() {
    $scope.book = $scope.books.pop();
    $scope.book.read = false;
    $scope.book.liked = false;
    $scope.book.unliked = false;
    if ($scope.book.usersLiked.indexOf($scope.userID) != -1 ||
        $scope.book.usersUnLiked.indexOf($scope.userID) != -1) {
      $scope.book.read = true;
      if ($scope.book.usersLiked.indexOf($scope.userID) != -1) {
        $scope.book.liked = true;
      } else {
        $scope.book.unliked = true;
      }
    }
    console.log($scope.book);
  };

  $scope.like = function () {
    console.log("like");
    dataService.updateLike($scope.userID, $scope.book._id);
    $scope.book.read = true;
    $scope.book.liked = true;
    $scope.book.unliked = false;
  };

  $scope.unlike = function () {
    console.log("unlike");
    dataService.updateUnLike($scope.userID, $scope.book._id);
    $scope.book.read = true;
    $scope.book.liked = false;
    $scope.book.unliked = true;
  };

  $scope.notRead = function () {
    console.log("didn't read");
    dataService.updateNotRead($scope.userID, $scope.book._id);
    $scope.book.read = false;
    $scope.book.liked = false;
    $scope.book.unliked = false;
  };

  $scope.swipe = function () {
    console.log("swipe");
  };

});