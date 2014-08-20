(function () {
    angular.module('app').factory('AuthorService', ['BaseResourceService', function (BaseResourceService) {
        return BaseResourceService.extend({
            init: function () { // Constructor
                this._super('/api/authors/:Id'); // call parent initialiser
            }
        });
    }]);
})();
