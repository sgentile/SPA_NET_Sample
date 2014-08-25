(function () {
    angular.module('app').factory('BookService', ['BaseResourceService', function (BaseResourceService) {
        return BaseResourceService.extend({
            init: function () { // Constructor
                this._super('/api/books/:Id'); // call parent initialiser
            }
        });
    }]);
})();