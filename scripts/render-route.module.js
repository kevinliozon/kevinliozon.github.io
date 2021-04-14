"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var moduleRouter = function () {
  /**
    * After refresh or change of page
    * Replaces existing script tag for page controller by the new page's one
    * @param {String} activeTemplate The relative path to the template
    * @private
    */
  function _getPageController(_x) {
    return _getPageController2.apply(this, arguments);
  }
  /**
    * Populate the wrapTemplate element with the HTML template for 404 errors
    * @private
    */


  function _getPageController2() {
    _getPageController2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(activeTemplate) {
      var lastScriptTag, scriptTag, response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // Detect the last script in the list (previous page controller) and removes it
              lastScriptTag = document.getElementsByTagName('script')[document.getElementsByTagName('script').length - 1];
              lastScriptTag.parentNode.removeChild(lastScriptTag); // Create the script tag calling the controller of the new page

              scriptTag = document.createElement('script'); // create a script tag

              scriptTag.type = 'text/javascript';
              scriptTag.defer = true; // script is loaded when the page is parsed

              scriptTag.async = false;
              scriptTag.src = activeTemplate + '/index.js'; // set the source of the script to your script

              _context.prev = 7;
              _context.next = 10;
              return fetch(scriptTag.src, {
                method: 'GET'
              });

            case 10:
              response = _context.sent;

              if (response.status !== 404) {
                document.body.append(scriptTag); // append the script to the DOM
              } else {
                scriptTag.src = '';
                document.body.append(scriptTag); // append the script to the DOM
              }

              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](7);
              return _context.abrupt("return", console.error('error:', _context.t0));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 14]]);
    }));
    return _getPageController2.apply(this, arguments);
  }

  function _getErrorPageTemplate() {
    wrapTemplate.innerHTML = 'loading...';
    var activeTemplate = '/pages/404';
    var activePage = 'Page not found';
    var activeUrl = location.origin + '#page=404';
    fetch(activeTemplate, {
      method: 'GET'
    }).then(function (response) {
      return response.text();
    }) // turn HTML response into a string
    .then(function (content) {
      //This is where we update the address bar with the 'activeUrl' parameter
      window.history.replaceState({
        template: activeTemplate,
        page: activePage,
        url: activeUrl
      }, activePage, activeUrl);
      document.title = activePage; // Defines tab title

      wrapTemplate.innerHTML = content; // Fills the wrap with template

      return _getPageController(activeTemplate); // Adds template's controller
    })["catch"](function (error) {
      return console.error('error:', error);
    });
  }
  /**
    * Populate the wrapTemplate element with the current page's HTML template
    * @private
    */


  function _getCurrentPageTemplate() {
    wrapTemplate.innerHTML = 'loading...';
    var activeTemplate = history.state.template;
    var activePage = history.state.page;
    var activeUrl = history.state.url;
    fetch(activeTemplate, {
      method: 'GET'
    }).then(function (response) {
      return response.text();
    }) // turn HTML response into a string
    .then(function (content) {
      //This is where we update the address bar with the 'activeUrl' parameter
      history.replaceState({
        template: activeTemplate,
        page: activePage,
        url: activeUrl
      }, activePage, activeUrl);
      document.title = activePage; // Defines tab title

      wrapTemplate.innerHTML = content; // Fills the wrap with template

      return _getPageController(activeTemplate); // Adds template's controller
    })["catch"](function (error) {
      return console.error('error:', error);
    });
  }
  /**
    * Populate the wrapTemplate element with the targeted HTML template
    * @param {String} activeTemplate The relative path to the template
    * @param {String} activePage Name of the page
    * @param {String} activeUrl The relative url
    * @private
    */


  function _getPageTemplate(activeTemplate, activePage, activeUrl) {
    wrapTemplate.innerHTML = 'loading...';
    fetch(activeTemplate, {
      method: 'GET'
    }).then(function (response) {
      if (response.status !== 404) {
        return response.text(); // turn HTML response into a string
      } else {
        throw new Error('No template for this page - 404');
      }
    }).then(function (content) {
      //This is where we update the address bar with the 'activeUrl' parameter
      window.history.pushState({
        template: activeTemplate,
        page: activePage,
        url: activeUrl
      }, activePage, activeUrl);
      document.title = activePage; // Defines tab title

      wrapTemplate.innerHTML = content; // Fills the wrap with template

      return _getPageController(activeTemplate); // Adds template's controller
    })["catch"](function (error) {
      _getErrorPageTemplate(); // no template => 404 page


      console.error('error: ', error);
    });
  }
  /**
    * On first load/location.origin: calls home page's template
    * Or refresh: calls current page's template
    * Serves also as fallback if history state is compromised or innexistant: we are redirected to Home page
    * This is mostly an exception error handler in the above case.
    * @private
    */


  function _callTemplate() {
    if (location.href === location.origin + location.pathname || !history) {
      // If no page selected or there is no history registered, we fall back onto homepage
      _getPageTemplate(pages[0].templatePath, pages[0].name, pages[0].href);
    } else {
      // Are we refreshing an existing page? otherwise we go back to the page before hashchange
      history.state ? _getCurrentPageTemplate() : history.back();
    }
  }
  /**
    * Is called on load
    * Set up the event listeners for the navigation and the generation of templates
    * within the single page wrap.
    * @param {String} linkClass The class of the links we want to listen to
    * @private
    */


  function _linksListener(linkClass) {
    // Array with all navigation links
    Array.from(document.getElementsByClassName(linkClass)).forEach(function (link) {
      // Event listener on each link
      link.addEventListener('click', function (e) {
        // If page selected is the same as actual one: do nothing
        if (history.state !== null && history.state.template !== null && this.dataset !== undefined && this.dataset.template === history.state.template) {
          return;
        } else {
          _getPageTemplate(this.dataset.template, link.text, this.href);
        } //This prevents the browser from actually following the default link


        e.stopPropagation();
        e.preventDefault();
      }, false);
    });
  }
  /**
    * Is called on load
    * Set up the event listeners for the side nav and scroll to the relevant content
    * @param {String} linkClass The class of the links we want to listen to
    * @private
    */


  function _hashListener(linkClass) {
    // Array with all navigation links
    Array.from(document.getElementsByClassName(linkClass)).forEach(function (link) {
      // Event listener on each link
      link.addEventListener('click', function (e) {
        // Scrolls to the content with matching fragment
        var elementPosition = document.getElementById(link.dataset.hash).getBoundingClientRect().top;
        var offsetPosition = elementPosition - 100;
        /* Sample function that returns boolean in case the browser is Internet Explorer*/

        function isIE() {
          ua = navigator.userAgent;
          /* MSIE used to detect old browsers and Trident used to newer ones*/

          var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
          return is_ie;
        }
        /* Create an alert to show if the browser is IE or not */


        if (isIE()) {
          window.scrollBy({
            top: offsetPosition
          });
        } else {
          window.scrollBy({
            top: offsetPosition,
            behavior: "smooth"
          });
        } //This prevents the browser from actually following the default link


        e.stopPropagation();
        e.preventDefault();
      }, false);
    });
  }
  /**
    * Is called on hashchange or popstate event (back/forward)
    * Check if the page we try to access exists
    * If yes calls its template and controller
    * If no calls its template and controller
    * @private
    */


  function _navStateOrHashChange() {
    wrapTemplate.innerHTML = 'loading...'; // we check if the new url has got a corresponding template

    fetch(location.href.replace('#page=', 'pages/'), {
      method: 'GET'
    }).then(function (response) {
      if (response.status !== 404) {
        return response.text(); // has a template
      } else {
        throw new Error('No template for this page - 404');
      }
    }).then(function (content) {
      wrapTemplate.innerHTML = content; // page is filled with new template

      return _getPageController(location.hash.replace('#page=', '/pages/')); // we get the controller for the page accessed
    })["catch"](function (error) {
      _getErrorPageTemplate(); // no template => 404 page


      console.error('error: ', error);
    });
  }
  /*** PUBLIC METHODS ***/


  function linksListener(linkClass) {
    _linksListener(linkClass);
  }

  function hashListener(linkClass) {
    _hashListener(linkClass);
  }

  function callTemplate() {
    _callTemplate();
  }

  function navStateOrHashChange() {
    _navStateOrHashChange();
  }

  function getErrorPageTemplate() {
    _getErrorPageTemplate();
  }

  return {
    linksListener: linksListener,
    hashListener: hashListener,
    callTemplate: callTemplate,
    navStateOrHashChange: navStateOrHashChange,
    getErrorPageTemplate: getErrorPageTemplate
  };
}();