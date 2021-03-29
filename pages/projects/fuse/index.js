(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.repl = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
  "use strict";

  /**
   * CONTROLLER FOR:
   * FUSE PROJECT PAGE
   * 
   * This script will replace the previous page's controller thanks to getPageController method in router module
   */
  new Promise(function (resolve, reject) {
    if (document.getElementById('sidenav')) {
      moduleNav.buildNavProject(document.getElementById('sidenav')); // Build the sidenav

      resolve(); // Detect the links and build their navigation listener
    } else {
      // Will listen to the links across the page in all cases
      reject('Sidenav element does not exist');
    }
  }).finally(function () {
    return moduleRouter.linksListener('js-link--content');
  }).then(function (result) {
    return moduleRouter.hashListener('js-link--hash');
  }, function (err) {
    return console.error('error:', err);
  });
});
