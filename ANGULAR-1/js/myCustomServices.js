'use strict';

(function(){
    angular
        .module('myApp')    
        .factory('dataFactory',dataFactory);
    
    function dataFactory(){
        var that = [
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
        
        return that;
    }
    
})();