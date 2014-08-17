﻿/// <reference path="angular.js" />

(function () {
    var app = angular.module('bookservice', ['ngResource', 'ngAnimate', 'ui', 'ui.filters', 'toaster']);

    app.factory('BookService', ['$resource', function($resource) {
        return $resource('/api/books/:Id', {Id: "@Id" }, {            
            'update': { method: 'PUT' }                   
        });
    }]);

    app.factory('AuthorService', ['$resource', function($resource) {
        return $resource('/api/authors/:Id', {}, {
            'update': { method: 'PUT' }
        });
    }]);

    app.controller('BookController', ['$http', 'BookService', 'AuthorService', 'toaster', function ($http, BookService, AuthorService, toaster) {
            var self = this;
            self.books = BookService.query();
            self.authors = AuthorService.query();            

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
                BookService.get({ id: book.Id }, function (data) {
                    self.details = data;
                });
            };

            self.addNewBook = function () {
                self.newBook.AuthorId = self.newBook.Author.Id;
                BookService.save(self.newBook, function(data) {
                    self.books.push(data);                    
                    toaster.pop('success', "New Book Added", self.newBook.Title + " by " + self.newBook.Author.Name);
                    self.newBook = angular.copy(self.book);
                }, function(err) {
                    toaster.pop('error', "Error Adding Book", '<ul><li>'+ err + '</li></ul>', null, 'trustedHtml');
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

    //http://stackoverflow.com/questions/14348384/reconcile-angular-js-and-bootstrap-form-validation-styling

    app.directive('bsHasError', [function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs, ctrl) {
                var input = element.find('input[ng-model]');
                if (input) {
                    scope.$watch(function () {
                        return input.hasClass('ng-invalid');
                    }, function (isInvalid) {
                        element.toggleClass('has-error', isInvalid);
                    });
                }
            }
        };
    }]);

    app.directive('showValidation', [function () {
        return {
            restrict: "A",
            require: 'form',
            link: function (scope, element, attrs, formCtrl) {
                element.find('.form-group').each(function () {
                    var $formGroup = $(this);
                    var $inputs = $formGroup.find('input[ng-model],textarea[ng-model],select[ng-model]');

                    if ($inputs.length > 0) {
                        $inputs.each(function () {
                            var $input = $(this);
                            scope.$watch(function () {
                                return $input.hasClass('ng-invalid');
                            }, function (isInvalid) {
                                $formGroup.toggleClass('has-error', isInvalid);
                            });
                        });
                    }
                });
            }
        };
    }]);
})();