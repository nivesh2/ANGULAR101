

(function(app) {
  'use strict';
  //registering an event to DOM, so that angular may bootstrap the required module when DOM is loaded.
  // Note that bootstrapModule is platform specific, thus using ng.platformBriwserDynamic().bootstrapModule  
  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic
      .platformBrowserDynamic()
      .bootstrapModule(app.AppModule);
  });
})(window.app || (window.app = {}));