(function () {

    var app = angular.module('app');

    app.controller('BookController', ['$http', 'BookService', 'AuthorService', 'toaster', function ($http, BookService, AuthorService, toaster) {
        var self = this;


        self.bookService = new BookService(),
        self.authorService = new AuthorService();

        self.books = self.bookService.query();
        self.authors = self.authorService.query();

        self.details = null;
        self.book = {
            AuthorId: null,
            Genre: null,
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
            BookService.save(self.newBook, function (data) {
                self.books.push(data);
                toaster.pop('success', "New Book Added", self.newBook.Title + " by " + self.newBook.Author.Name);
                bookForm.$setPristine();
                self.newBook = angular.copy(self.book);
            }, function (err) {
                toaster.pop('error', "Error Adding Book", '<ul><li>' + err + '</li></ul>', null, 'trustedHtml');
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