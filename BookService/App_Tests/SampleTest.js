/// <reference path="~/Scripts/jasmine.js"/>
/// <reference path="~/Scripts/angular.js" />
/// <reference path="~/App/books/BookController.js"/>

describe("SampleTest", function() {
    it("can add two numbers", function() {        
        expect(10 + 2).toBe(12);
    });
});

var myModule = angular.module('MyApp', []);
myModule.controller('MainCtrl', ['$scope',
 function ($scope) {
     // I'm a lonely controller :( 
 }
]);

describe('Controller: MainCtrl', function () {
    beforeEach(module('MyApp'));
    var MainCtrl, scope;
    beforeEach(inject(function ($controller) {
        scope = {};
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));
    it('should have scope defined', function () {
        expect(scope).toBeDefined();
    });
});

//describe('Controller: BookCtrl', function () {
//    beforeEach(module('app'));
//    var MainCtrl, scope;
//    beforeEach(inject(function ($controller) {
//        scope = {};
//        MainCtrl = $controller('BookCtrl', {
//            //$scope: scope
//        });
//    }));
//    it('should have scope defined', function () {
//        expect(scope).toBeDefined();
//    });
//});