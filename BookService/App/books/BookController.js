(function () {

    var app = angular.module('app');

    app.controller('BookController', ['$scope', 'BookService', 'AuthorService', 'GenreService', 'toaster', function ($scope, BookService, AuthorService, GenreService, toaster) {
        var self = this;
        self.bookService = new BookService();

        self.busyPromise = self.bookService.query().$promise.then(function(data) {
            self.books = data;
        });
        
           
        $scope.$on("NewBook", function(event, newBook) {
            self.books.push(newBook);
        });

        $scope.$on("RemoveBook", function (event, book) {
            var bookToRemove = _.remove(self.books, { 'Id': book.Id });
            self.books = _.without(self.books, bookToRemove);
        });
    }]);
})();