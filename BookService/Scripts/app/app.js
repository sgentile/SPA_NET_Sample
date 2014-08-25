/// <reference path="angular.js" />

(function () {
    var app = angular.module('app', ['ngRoute', 'ngResource', 'ngAnimate', 'ui', 'ui.filters', 'ui.bootstrap', 'toaster', 'cgBusy', 'class']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
          when('/', {
              templateUrl: '/Views/Partials/AddBook.html',
              controller: 'AddBookCtrl',
              controllerAs: 'vm'
          }).
          //when('/phones/:phoneId', {
          //    templateUrl: 'partials/phone-detail.html',
          //    controller: 'PhoneDetailCtrl'
          //}).
          otherwise({
              redirectTo: '/'
          });
    }]);
        
    

    //http://stackoverflow.com/questions/14348384/reconcile-angular-js-and-bootstrap-form-validation-styling
    /*
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
    */
})();