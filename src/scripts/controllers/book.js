'use strict';

angular.module('mainApp')
.controller('booksCtrl', function($scope, dataService) {

$scope.userID = "56ff918544ae2660d9cb2a8c"

  dataService.getBooks(function(response) {
    $scope.books = response.data;
    $scope.book = $scope.books.pop();
    console.log($scope.book);
  });

  $scope.like = function () {
    console.log("like");
    dataService.updateLike($scope.userID, $scope.book._id);
  };

  $scope.unlike = function () {
    console.log("unlike");
    dataService.updateUnLike($scope.userID, $scope.book._id);
  };

  $scope.notRead = function () {
    console.log("didn't read");
    dataService.updateNotRead($scope.userID, $scope.book._id);
  };

});