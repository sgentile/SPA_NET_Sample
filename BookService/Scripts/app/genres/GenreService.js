(function () {
    angular.module('app').factory('GenreService', ['BaseResourceService', function (BaseResourceService) {
        return BaseResourceService.extend({
            init: function () { // Constructor
                this._super('/api/genres/:Id'); // call parent initialiser
            }
        });
    }]);
})();
