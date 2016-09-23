'use strict';

(function(){
    angular
        .module('myApp')
        .controller('myController',myController);

    myController.$inject = ['dataFactory'];
    function myController(data){
        this.students = data;
    }
})();