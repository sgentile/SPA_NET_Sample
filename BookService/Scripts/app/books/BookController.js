(function () {

    var app = angular.module('app');

    app.controller('BookController', ['$scope', 'BookService', 'AuthorService', 'GenreService', 'toaster', function ($scope, BookService, AuthorService, GenreService, toaster) {
        var self = this;
        self.bookService = new BookService();

        self.books = self.bookService.query();

        self.details = null;
           
        $scope.$on("NewBook", function(event, newBook) {
            self.books.push(newBook);
        });

        self.showDetails = function (book) {
            self.currentBook = book;
            self.bookService.get({ id: book.Id }).$promise.then(function (data) {                
                self.details = data;                
            });
        };

        

        self.DeleteBook = function () {
            if (self.details.Id && window.confirm("Are you sure you want to delete this item ?")) {
                self.details.$delete();
                self.books = _.without(self.books, self.currentBook);
                toaster.pop('success', "Book Removed", self.details.Title);
                self.details = null;
            }
        }
    }]);
})();