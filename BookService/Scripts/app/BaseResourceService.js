(function () {
    angular.module('app').factory('BaseResourceService', ['$resource', function ($resource) {
        return Class.extend({
            init: function (resourceUri) { // Constructor
                // object initialisation
                this.resource = $resource(resourceUri, { Id: "@Id" }, {
                    'update': { method: 'PUT' }
                });
            },
            query: function () {
                return this.resource.query();
            },
            get: function(params) {
                return this.resource.get(params);
            }
        });
    }]);
})();