'use strict';


var student={
    name:'Rahul',
    city:'Varanasi',
    age:'24'
};

(function(){
    var app = angular.module('myApp',[]);
    app.controller('myController',function(){
        this.student = student;
    });   

})();