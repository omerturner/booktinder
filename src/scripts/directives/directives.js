angular.module('mainApp')
.directive('book', function() {
  return {
    templateUrl: 'templates/book.html',
    controller: 'booksCtrl',
    replace: true
  }
});