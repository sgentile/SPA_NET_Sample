(function() {
    var app = angular.module('app');

    app.controller('AddBookCtrl', ['$scope', 'toaster', 'BookService', 'AuthorService', 'GenreService', function ($scope, toaster, BookService, AuthorService, GenreService) {
        var self = this;
        self.bookService = new BookService();
        self.authorService = new AuthorService();
        self.genreService = new GenreService();

        self.authors = self.authorService.query();
        self.genres = self.genreService.query();

        self.book = {
            AuthorId: null,
            GenreId: null,
            Price: null,
            Title: null,
            Year: null
        };

        self.newBook = angular.copy(self.book);

        self.addNewBook = function (bookForm) {
            self.newBook.AuthorId = self.newBook.Author.Id;
            self.newBook.GenreId = self.newBook.Genre.Id;
            self.bookService.save(self.newBook).$promise.then(function (data) {                
                $scope.$emit("NewBook", data);
                toaster.pop('success', "New Book Added", self.newBook.Title + " by " + self.newBook.Author.Name);
                bookForm.$setPristine();
                self.newBook = angular.copy(self.book);
            });
        };
    }]);
})();
