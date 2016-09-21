'use strict';

(function(){
    var app = angular.module('myControllers',['myCustomServices']);
    
    app.controller('myController',['studentData',function(data){
        this.students = data;
    }]);
})();