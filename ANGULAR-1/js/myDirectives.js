'use strict';

(function() {
    angular.module('myApp')
        .directive('myTitle', myTitle)
        .directive('myDisplay', myDisplay)
        .directive('myForm', myForm)
        .directive('mySection', mySection );

    function myTitle() {
        return {
            restrict: 'E',
            templateUrl: 'my-title.html'
        }
    }
    function myDisplay() {
        return {
            restrict: 'E',
            controller: 'StudentController',
            controllerAs: 'ctrl',
            templateUrl: 'my-display.html'
        };
    }
    function myForm() {
        return {
            restrict: 'A',
            controller: 'FormController',
            controllerAs: 'formCtrl',
            templateUrl: 'my-form.html'
        }
    }
    function mySection() {
        return {
            restrict: 'E',
            controller: 'PanelController',
            controllerAs: 'panel',
            templateUrl: 'my-section.html'
        }
    }
    
})();