"use strict";

/*** CONTAINERS ***/
var wrapBody = document.body;
var wrapHeaderNav = document.getElementById('header-nav');
var wrapFooterNav = document.getElementById('footer-nav');
var wrapFooterNavAlt = document.getElementById('footer-nav-alt');
var wrapTemplate = document.getElementById('wrap');
var wrapModal = {
  container: document.getElementById('modal'),
  close: document.getElementById('modalClose'),
  caption: document.getElementById('modalCaption'),
  image: document.getElementById('modalImage')
};
/*** COUNTS ***/

var fontSizeCount = document.getElementById('fontSize');
var slideIndex = 1;
var selectedSlideIndex = 1;
/**
 * On load or refresh:
 * - Build the header and footer navs as well as their respective listeners
 * - Call the template
 */

window.addEventListener('load', function (e) {
  // Building the navigations
  moduleNav.buildNavMain();
  moduleNav.buildNavAlt(); // Building the navigation listener

  moduleRouter.linksListener('js-link--nav'); // Checks if user has already succesfuly accessed to password protected pages

  moduleRouter.getAccessToken(localStorage.getItem('access')); // Building the command listener

  moduleCommands.commandsListener('js-btn'); // Checks if UI settings have been defined

  moduleCommands.getSettings(localStorage.getItem('theme'), localStorage.getItem('font')); // Building the listeners for closing modals

  moduleCommands.closeViewModal(wrapModal.container, wrapModal.close); // Calls the template relevant to the page we are loading from

  moduleRouter.callTemplate();
});
/**
 * On change in the url or upon state change
 * We cannot force the url to inject the root wrap (with header/wrap/footer) within itself: when hash === "#page="
 * We cannot force the url to inject the root folder (with links) within the wrap for security reasons: when hash does not include "#page="
 * Outcomes:
 * - page selected is valid and does not contain a fragment: Go to page
 * - page selected is valid and contains a fragment: Scroll to fragment
 * - page selected is invalid: 404
 */

window.addEventListener('hashchange', function (e) {
  if (location.hash.indexOf('#page=') > -1 && location.hash !== '#page=') {
    // If the hash contains the string '#page=' but does not match it (root folder)
    if (location.hash.replace(/[^#]/g, '').length <= 1) {
      // There are less than two # in the url: it means we have no fragment selected (just the one of the active page)
      moduleRouter.navStateOrHashChange();
    } else {
      // There are at least two # in the url: it means we have a fragment selected
      // We parse the hash in order to retrieve the id of the element we want to target (we get what stands after the second #: the fragment)
      document.getElementById(location.hash.split('#').slice(2)).scrollIntoView();
    }
  } else {
    moduleRouter.getErrorPageTemplate(); // no template => 404 page
  }
}, false);
/* Sample function that returns boolean in case the browser is Internet Explorer*/

function isIE() {
  var ua = navigator.userAgent;
  /* MSIE used to detect old browsers and Trident used to newer ones*/

  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  return is_ie;
}
