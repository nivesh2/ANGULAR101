
(function(app){
    'use strict';

    //exporting the component to app module (namespace)
    app.AppComponent = 
        //creating a component, using global Angular core namespace, ng.core
        ng.core.Component({
            selector:'my-app',
            template:'<h2>Hello Angular-2!</h2>'
        })
        .Class({
            constructor: function(){
                /*
                 * Here we add behavior to the component
                 * by adding properties and methods
                 * which binds to the view.
                 */
            }
        });
})(window.app || (window.app = {}));