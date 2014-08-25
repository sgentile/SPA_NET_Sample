(function () {

    var app = angular.module('app');

    app.controller('BookController', ['$http', 'BookService', 'AuthorService', 'GenreService', 'toaster', function ($http, BookService, AuthorService, GenreService, toaster) {
        var self = this;

        self.bookService = new BookService(),
        self.authorService = new AuthorService();
        self.genreService = new GenreService();

        self.books = self.bookService.query();
        self.authors = self.authorService.query();
        self.genres = self.genreService.query();

        self.details = null;
        self.book = {
            AuthorId: null,
            GenreId: null,
            Price: null,
            Title: null,
            Year: null
        };

        self.newBook = angular.copy(self.book);

        self.showDetails = function (book) {
            self.currentBook = book;
            self.bookService.get({ id: book.Id }).$promise.then(function (data) {
                self.details = data;                
            });
        };

        self.addNewBook = function (bookForm) {
            self.newBook.AuthorId = self.newBook.Author.Id;
            self.newBook.GenreId = self.newBook.Genre.Id;
            self.bookService.save(self.newBook).$promise.then(function(data) {
                self.books.push(data);
                toaster.pop('success', "New Book Added", self.newBook.Title + " by " + self.newBook.Author.Name);
                bookForm.$setPristine();
                self.newBook = angular.copy(self.book);
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