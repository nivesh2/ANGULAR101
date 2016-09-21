'use strict';

(function() {
    var app = angular.module('myCustomDirectives', []);

    app.directive('myTitle', function() {
        return {
            restrict: 'E',
            templateUrl: 'my-title.html'
        }
    });

    app.directive('myDisplay', function() {
        return {
            restrict: 'E',
            controller: 'myController',
            controllerAs: 'ctrl',
            templateUrl: 'my-display.html'
        };
    });

    app.directive('myForm', function() {
        return {
            restrict: 'A',
            controller: 'FormController',
            controllerAs: 'formCtrl',
            templateUrl: 'my-form.html'
        }
    });

    app.directive('mySection', function() {
        return {
            restrict: 'E',
            controller: 'PanelController',
            controllerAs: 'panel',
            templateUrl: 'my-section.html'
        }
    });
})();