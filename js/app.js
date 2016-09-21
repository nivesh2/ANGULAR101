'use strict';

(function(){
    var app = angular.module('myApp',['panelModule','myCustomDirectives','myCustomServices']);
    
    app.controller('myController',['studentData',function(data){
        this.students = data;
    }]);
    
})();