"use strict";

/**
 * CONTROLLER FOR:
 * FUSE PROJECT PAGE
 * 
 * This script will replace the previous page's controller thanks to getPageController method in router module
 */
new Promise(function (resolve, reject) {
  if (document.getElementById('sidenav')) {
    moduleNav.buildHashList(document.getElementById('sidenav'), projectAnchors); // Build the sidenav

    resolve(); // Detect the links and build their navigation listener
  } else {
    // Will listen to the links across the page in all cases
    reject('Sidenav element does not exist');
  }
}).then(function (result) {
  moduleRouter.hashListener('js-link--hash', 'specifics');
  moduleViewRenderer.imagesListener(wrapTemplate, wrapModal); // Building the images listener

  moduleViewRenderer.getViewBadges(['UML', 'Diagrams', 'Lo-fi'], document.getElementById('skills'));
  moduleViewRenderer.getViewBadges(['Ideation', 'User flows'], document.getElementById('badges'));
  moduleViewRenderer.getViewSidebar();
}, function (err) {
  return console.error('error:', err);
})["finally"](function () {
  return moduleRouter.linksListener('js-link');
});
