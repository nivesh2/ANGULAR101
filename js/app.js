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
    
    app.controller('FormController',function(){
        var that =this;
        
        that.reviews = [];
        that.review = {};
        
        that.onSubmit = function(a){
            that.reviews.push(a);
            that.review = {};
        }
        
    });
    app.controller('PanelController',function(){        
        
        //init
        this.tab=1;

        this.selectTab = function(selectedTab){
            this.tab = selectedTab;
        };
        this.isSelected = function(checkedTab){
            return checkedTab === this.tab;
        };
    });
})();