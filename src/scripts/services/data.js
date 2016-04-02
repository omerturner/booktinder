'use strict';

angular.module('mainApp')
.service('dataService', function($http) {

  this.getBooks = function(callback){
    $http.get('/api/books/get')
    .then(callback);
  };

  this.updateLike = function(userID, bookID){
    console.log({userID: userID, bookID: bookID});
    $http.post('/api/books/update/like',
      {userID: userID, bookID: bookID});
  };

  this.updateUnLike = function(userID, bookID){
    console.log({userID: userID, bookID: bookID});
    $http.post('/api/books/update/unlike',
      {userID: userID, bookID: bookID});
  };

  this.updateNotRead = function(userID, bookID){
    console.log({userID: userID, bookID: bookID});
    $http.post('/api/books/update/notread',
      {userID: userID, bookID: bookID});
  };

});