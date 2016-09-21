'use strict';

(function(){
    var app = angular.module('myControllers',['myCustomServices']);
    
    app.controller('StudentController',['studentData',function(data){
        this.students = data;
    }]);
})();