'use strict';


var student=[
    {
    name:'Sahil',
    city:'Pathankot',
    age:'23',
    passed:true
},
{
    name:'Rahul',
    city:'Varanasi',
    age:'24',
    passed:true
},
{
    name:'XYZ',
    city:'Delhi',
    age:'21',
    passed:false
}
];

(function(){
    var app = angular.module('myApp',[]);
    app.controller('myController',function(){
        this.students = student;
    });   

})();