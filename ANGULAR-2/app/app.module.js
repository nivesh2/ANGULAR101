'use strict';

//creating a global namespace app. Thus, module.
(function(app){
    app.AppModule = 
        /*
         * Creating a module, using global Angular core namespace, ng.core.
         * The NgModule decorator is listing:

            - What other Angular Modules ours uses
            - Which components and directives we declare in our components
            - The component to bootstrap at the start
         */
        ng.core.NgModule({
            imports: [ng.platformBrowser.BrowserModule],
            declarations: [app.AppComponent],
            bootstrap: [app.AppComponent]
        })
        .Class({
            constructor: function() {}
        });
})(window.app || (window.app = {}));
