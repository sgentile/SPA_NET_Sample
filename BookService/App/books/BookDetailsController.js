(function() {
    var app = angular.module('app');

    app.controller('BookDetailCtrl', ['$scope', '$routeParams', '$location', 'toaster', 'BookService', function ($scope, $routeParams, $location, toaster, BookService) {
        var self = this;
        self.bookService = new BookService();
        self.details = null;
        
        self.bookService.get({ id: $routeParams.bookId }).$promise.then(function (data) {
            if (data !== null) {
                self.details = data;
            }
        });
              
        self.DeleteBook = function () {
            if (self.details.Id && window.confirm("Are you sure you want to delete this item ?")) {
                self.details.$delete();
                $scope.$emit("RemoveBook", self.details);
                $location.path('#/');
                toaster.pop('success', "Book Removed", self.details.Title);
                self.details = null;
            }
        }

        self.Cancel = function () {            
            $location.path('#/');
        }
    }]);
})();