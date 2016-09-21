'use strict';


// here the new module is attached to the root angular scope and thus is accessible for the dependency injection for other angular modules sharing same root scope
(function(){
    var app = angular.module('panelModule',[]);
    
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