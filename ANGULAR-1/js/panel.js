'use strict';


// here the new module is attached to the root angular scope and thus is accessible for the dependency injection for other angular modules sharing same root scope
(function(){
    angular.module('myApp')    
        .controller('PanelController', PanelController)
        .controller('FormController', FormController);
    
    function PanelController(){        
        
        //init
        this.tab=1;

        this.selectTab = function(selectedTab){
            this.tab = selectedTab;
        };
        this.isSelected = function(checkedTab){
            return checkedTab === this.tab;
        };
    }

    function FormController(){
        var that =this;

        that.reviews = [];
        that.review = {};

        that.onSubmit = function(a){
            that.reviews.push(a);
            that.review = {};
        }

    }
})();