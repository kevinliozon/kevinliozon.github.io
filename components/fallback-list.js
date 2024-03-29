"use strict";

/**
 * COMPONENT FOR:
 * FALLBACK LIST OF LINKS
 * 
 * Generates and HTML <ul> node with helper links
 */
var fallbackLinksComponent = document.createElement('ul');
fallbackLinksComponent.classList.add('c-list', 'c-list--links');
fallbackLinksComponent.innerHTML = '\
<li class="c-list__i">\
  <a class="c-link js-link"\
  href="' + pages[0].href + '"\
  aria-label="' + pages[0].label + '"\
  data-template="' + pages[0].templatePath + '"\
  data-name="' + pages[0].name + '"\
  target="_top">Return to home page</a>\
</li>\
<li class="c-list__i">\
  <a class="c-link js-link"\
  href="' + pages[3].href + '"\
  aria-label="' + pages[3].label + '"\
  data-template="' + pages[3].templatePath + '"\
  data-name="' + pages[3].name + '"\
  target="_top">Contact me</a>\
</li>\
<li class="c-list__i">\
  <button id="loadBack" class="c-btn c-float__btn">\
    Go to previous page\
  </button>\
</li>';
