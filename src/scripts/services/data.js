'use strict';

angular.module('mainApp')
.service('dataService', function($http) {

  this.getBooks = function(userID, booksLiked, callback){
     $http.post('/api/books/getBooks',{userID: userID, booksLiked: booksLiked})
     .then(callback);
  };

  this.getBook = function(bookID, callback){
     $http.post('/api/books/getBook',{bookID: bookID})
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