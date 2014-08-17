(function () {
    var app = angular.module('app');

    app.factory('BookService', ['$resource', function ($resource) {
        return $resource('/api/books/:Id', { Id: "@Id" }, {
            'update': { method: 'PUT' }
        });
    }]);
})();