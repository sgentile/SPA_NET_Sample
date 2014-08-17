(function() {
    var app = angular.module('app');

    app.factory('AuthorService', ['$resource', function ($resource) {
        return $resource('/api/authors/:Id', {}, {
            'update': { method: 'PUT' }
        });
    }]);
})();
