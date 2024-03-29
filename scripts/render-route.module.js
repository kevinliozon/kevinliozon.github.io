"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
    * 
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
    _loadPage(true);

    var activeTemplate = '/pages/error';
    fetch(activeTemplate, {
      method: 'GET'
    }).then(function (response) {
      return response.text(); // turn HTML response into a string
    }).then(function (content) {
      _buildPage(activeTemplate, 'Not found', location.origin + '#page=error', content, 'replace');
    })["finally"](function () {
      var errorComponent = document.getElementById('errorComponent');
      errorComponent.appendChild(fallbackLinksComponent); // generates the fallback links once the page is created

      var backLink = document.getElementById('loadBack');

      if (backLink) {
        // Back button
        backLink.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          history.back();
        });
      }
    })["catch"](function (error) {
      return console.error('error:', error);
    });
  }
  /**
    * Build the page with current page's HTML template
    * 
    * @private
    */


  function _getCurrentPageTemplate() {
    _loadPage(true);

    var activeTemplate = history.state.template; // turn HTML response into a string

    fetch(activeTemplate, {
      method: 'GET'
    }).then(function (response) {
      if (response.status !== 404 && location.hash.indexOf('#page=error') === -1) {
        return response.text(); // has a template
      } else {
        throw new Error('No template for this page - 404');
      }
    }).then(function (content) {
      _buildPage(activeTemplate, history.state.page, history.state.url, content, 'replace');
    })["catch"](function (error) {
      _getErrorPageTemplate(); // no template => 404 page


      console.error('error:', error);
    });
  }
  /**
    * Build the page with targeted HTML template
    * 
    * @param {String} activeTemplate The relative path to the template
    * @param {String} activePage Name of the page
    * @param {String} activeUrl The relative url
    * @private
    */


  function _getPageTemplate(activeTemplate, activePage, activeUrl) {
    _loadPage(true);

    fetch(activeTemplate, {
      method: 'GET'
    }).then(function (response) {
      if (response.status !== 404) {
        return response.text(); // turn HTML response into a string
      } else {
        throw new Error('No template for this page - 404');
      }
    }).then(function (content) {
      _buildPage(activeTemplate, activePage, activeUrl, content, 'push');
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
    * 
    * @private
    */


  function _callTemplate() {
    if (location.href === location.origin + location.pathname || !history) {
      // If no page selected or there is no history registered, we fall back onto homepage
      _getPageTemplate(pages[0].templatePath, pages[0].name, pages[0].href);
    } else {
      // Are we refreshing an existing page? otherwise we follow the url
      history.state ? _getCurrentPageTemplate() : _navStateOrHashChange();
    }
  }
  /**
    * @param {String} activePage The name of the active page
    * 
    * @private
    */


  function _setPageAsActive(activePage) {
    // Array with all navigation links
    for (var _i = 0, _Array$from = Array.from(document.getElementsByClassName('js-link--nav')); _i < _Array$from.length; _i++) {
      var link = _Array$from[_i];
      link.classList.remove('u-active'); // removes any active state

      link.blur(); // removes any focus

      if (location.hash.indexOf('projects') > -1 && link.dataset.name.replace(/\s/g, '').toLowerCase() === 'projects') {
        link.classList.add('u-active'); // If we are on any project page it highlights the 'projects' menu item
      } else if (link.dataset.name.replace(/\s/g, '').toLowerCase() === activePage.replace(/\s/g, '').toLowerCase()) {
        link.classList.add('u-active'); // converts page's name to lowercase without spaces then adds active state to the relevant nav item
      }

      ;
    }

    ;
  }
  /**
    * We clear the previous anchor and make the new one active
    * @param {Object} activeHash The element of the active anchor
    * @param {Object} newHash The element of the new active anchor
    * @returns updated element
    * 
    * @private
    */


  function _setHashAsActive(activeHash, newHash) {
    activeHash.classList.remove('u-active'); // removes any active state

    activeHash = newHash;
    activeHash.classList.add('u-active');
    return activeHash;
  }
  /**
    * Is called on load
    * Set up the event listeners for the navigation and the generation of templates
    * within the single page wrap.
    * 
    * @param {String} linkClass The class of the links we want to listen to
    * @private
    */


  function _linksListener(linkClass) {
    // Array with all navigation links
    for (var _i2 = 0, _Array$from2 = Array.from(document.getElementsByClassName(linkClass)); _i2 < _Array$from2.length; _i2++) {
      var link = _Array$from2[_i2];
      // Event listener on each link
      link.addEventListener('click', function (e) {
        // If page selected is the same as actual one: do nothing
        if (history.state !== null && history.state.template !== null && this.dataset !== undefined && this.dataset.template === history.state.template) {
          return;
        } else {
          _getPageTemplate(this.dataset.template, this.dataset.name, this.href);
        } //This prevents the browser from actually following the default link


        e.preventDefault();
        e.stopImmediatePropagation();
      }, false);
    }
  }
  /**
    * Is called on load
    * Set up the event listeners for the anchor nav and scroll to the relevant content
    * 
    * @param {String} hashClass The class of the anchor we want to listen to
    * @param {String} elId The id of the element we target
    * @private
    */


  function _hashListener(hashClass, elId) {
    // Active anchor/hash is the first one by default - we refer to the parent node for the styling which is <li>
    var activeHash = document.getElementsByClassName(hashClass)[1].parentNode; // [0] is skip to content

    var hashObserver = new IntersectionObserver(function (entries) {
      // Each entry being an element with a specific id
      var _iterator = _createForOfIteratorHelper(entries),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var el = _step.value;

          // isIntersecting is true when element and viewport are overlapping
          if (el.isIntersecting === true) {
            elId = el.target.id; // The element we target is the visible (75%) one 

            activeHash.classList.remove('u-active'); // reset all anchors
            // Array with all anchor links

            var _iterator2 = _createForOfIteratorHelper(document.getElementsByClassName(hashClass)),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var hash = _step2.value;
                hash.blur(); // removes any focus
                // If the value of an anchor is same as the value of the element we see

                if (hash.dataset.name === elId) {
                  activeHash = _setHashAsActive(activeHash, hash.parentNode); // set active and update variable of the active anchor
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }, {
      threshold: [0.75]
    }); // Array with all anchor links

    var _iterator3 = _createForOfIteratorHelper(document.getElementsByClassName(hashClass)),
        _step3;

    try {
      var _loop = function _loop() {
        var hash = _step3.value;
        hash.parentNode.classList.remove('u-active'); // removes any active state

        activeHash.classList.add('u-active'); // reset all anchors
        // we observe elements using this id

        hashObserver.observe(document.querySelector('#' + hash.dataset.name)); // Event listener on each hash

        hash.addEventListener('click', function (e) {
          activeHash = _setHashAsActive(activeHash, hash.parentNode); // set active and update variable of the active anchor
          // The element, its position and the offset for scroll

          var el = document.getElementById(hash.dataset.name);
          var elementPosition = el.getBoundingClientRect().top;
          var offsetPosition = elementPosition - 100; // We focus the element

          el.focus(); // Scrolls to the content with matching fragment

          if (isIE()) {
            window.scrollBy(0, offsetPosition);
          } else {
            window.scrollBy({
              top: offsetPosition,
              behavior: "smooth"
            });
          } //This prevents the browser from actually following the default hash


          e.preventDefault();
          e.stopImmediatePropagation();
        }, false);
      };

      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }
  /**
    * Is called on hashchange or popstate event (back/forward)
    * Check if the page we try to access exists
    * If yes creates the page
    * If no calls error page
    * 
    * @private
    */


  function _navStateOrHashChange() {
    _loadPage(true); // we check if the new url has got a corresponding template


    fetch(location.href.replace('#page=', 'pages/'), {
      method: 'GET'
    }).then(function (response) {
      if (response.status !== 404 && location.hash.indexOf('#page=error') === -1) {
        return response.text(); // has a template
      } else {
        throw new Error('No template for this page - 404');
      }
    }).then(function (content) {
      var newPageTemplateLocation = location.hash.replace('#page=', '/pages/');

      var _iterator4 = _createForOfIteratorHelper(pages),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var page = _step4.value;
          var pageTemplateToMatch = page.templatePath;

          if (newPageTemplateLocation === pageTemplateToMatch || newPageTemplateLocation === pageTemplateToMatch + '/') {
            _buildPage(newPageTemplateLocation, page.name, page.href, content, 'replace');
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      var _iterator5 = _createForOfIteratorHelper(projects),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var project = _step5.value;
          var projectTemplateToMatch = project.templatePath;

          if (newPageTemplateLocation === projectTemplateToMatch || newPageTemplateLocation === projectTemplateToMatch + '/') {
            _buildPage(newPageTemplateLocation, project.name, project.href, content, 'replace');
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    })["catch"](function (error) {
      _getErrorPageTemplate(); // no template => 404 page


      console.error('error: ', error);
    });
  }
  /**
    * Updates history
    * Populate the wrapTemplate element with the targeted HTML template
    * 
    * @param {String} activeTemplate The relative path to the template
    * @param {String} activePage Name of the page
    * @param {String} activeUrl The relative url
    * @param {Object} slideToDisplay the content of the page to populate the wrap
    * @param {String} historyState either push or replace
    * @private
    */


  function _buildPage(activeTemplate, activePage, activeUrl, content, historyState) {
    //This is where we update the address bar with the 'activeUrl' parameter
    switch (historyState) {
      case 'push':
        window.history.pushState({
          template: activeTemplate,
          page: activePage,
          url: activeUrl
        }, activePage, activeUrl);
        break;

      case 'replace':
        window.history.replaceState({
          template: activeTemplate,
          page: activePage,
          url: activeUrl
        }, activePage, activeUrl);
        break;

      default:
        console.error('Error: Push or Replace state not defined for history');
        break;
    }

    new Promise(function (resolve, reject) {
      // It is a project page AND we do not have an access token (false or null)
      if (activeUrl.indexOf('#page=projects/') > -1 && localStorage.getItem('access') !== 'true') {
        // We go throught the list of protected projects urls
        var _iterator6 = _createForOfIteratorHelper(protectedProjectsUrls),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var protectedProjectUrl = _step6.value;

            // Is the url of the current project among those that are protected ? if yes bring the password check component : if not build the page
            if (location.hash === protectedProjectUrl) {
              _requestPassword();

              return; // we do not proceed with resolve
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        resolve(); // Page is for project but is not protected
      } else if (!activeUrl) {
        reject('The url does not exist');
      } else resolve(); // Page is not for project OR we already have an access token

    }).then(function (result) {
      _loadPage(false);

      document.title = activePage; // Defines tab title

      wrapTemplate.innerHTML = content; // Fills the wrap with template

      _setPageAsActive(activePage); // Set page's link as active


      _getPageController(activeTemplate); // Adds template's controller

    }, function (err) {
      console.error('error:', err);
      return;
    })["finally"](function () {
      return moduleRouter.linksListener('js-link');
    });
  }
  /**
    * Fade in effect when changing or loading page
    * 
    * @private
    */


  function _contentTransitionAnimation() {
    var opacity = 0;
    var intervalID = setInterval(function () {
      if (opacity < 1) {
        opacity = opacity + 0.1;
        wrapTemplate.style.opacity = opacity;
      } else {
        clearInterval(intervalID);
      }
    }, 25);
  }
  /**
    * Checks if no access token setting been applied from localstorage
    * - if no access or no value to accessToken key => set the access to false and returns false
    * - if access token has already been granted => returns true
    * 
    * @param {String} accessToken The localstorage item value for access
    * @returns {Boolean} Confirms if we have or not been previously granted access
    * @private
    */


  function _getAccessToken(accessToken) {
    if (!accessToken || accessToken === 'false') {
      localStorage.setItem('access', 'false');
      return false;
    } else {
      return true;
    }
  }
  /**
    * The load page replaces the main container content
    * 
    * @param {Boolean} isLoading The loading state
    * @private
    */


  function _loadPage(isLoading) {
    window.scrollTo(0, 0); // since it is a single page website we need to reset the position to top of the screen

    if (isLoading) {
      _contentTransitionAnimation();

      wrapTemplate.innerHTML = '\
      <div class="l-float">\
        <div id="loadComponent" class="c-float">\
          <header class="c-float__header c-float__header--load">\
            <h1 class="c-float__title">Loading</h1>\
            <svg class="c-float__spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\
              <path d="M478.71 364.58zm-22 6.11l-27.83-15.9a15.92 15.92 0 0 1-6.94-19.2A184 184 0 1 1 256 72c5.89 0 11.71.29 17.46.83-.74-.07-1.48-.15-2.23-.21-8.49-.69-15.23-7.31-15.23-15.83v-32a16 16 0 0 1 15.34-16C266.24 8.46 261.18 8 256 8 119 8 8 119 8 256s111 248 248 248c98 0 182.42-56.95 222.71-139.42-4.13 7.86-14.23 10.55-22 6.11z" class="c-btn__ico--alt"/>\
              <path d="M271.23 72.62c-8.49-.69-15.23-7.31-15.23-15.83V24.73c0-9.11 7.67-16.78 16.77-16.17C401.92 17.18 504 124.67 504 256a246 246 0 0 1-25 108.24c-4 8.17-14.37 11-22.26 6.45l-27.84-15.9c-7.41-4.23-9.83-13.35-6.2-21.07A182.53 182.53 0 0 0 440 256c0-96.49-74.27-175.63-168.77-183.38z" class="c-btn__ico"/>\
            </svg>\
          </header>\
        </div>\
      </div>';
      var loadComponent = document.getElementById('loadComponent');
      if (loadComponent) _buildFallbackLinks(loadComponent);
    } else if (!isLoading) _contentTransitionAnimation();
  }
  /**
    * The password page replaces the main container content
    * 
    * @private
    */


  function _requestPassword() {
    wrapTemplate.innerHTML = '\
    <div class="l-float">\
      <div id="accessComponent" class="c-float">\
        <header class="c-float__header">\
          <h1 class="c-float__title">Get access to all projects</h1>\
        </header>\
        <p class="c-float__d">\
          Please <a class="js-link c-link" href="#page=contact" target="_top" data-template="/pages/contact" data-name="Contact" aria-label="Contact page">contact me</a> to get an access token.\
        </p>\
        <form class="c-float__form" id="form-access" name="PasswordField" method="post" action="">\
          <div class="c-form__field">\
            <label class="c-form__label" for="form-password">Password</label>\
            <input id="form-password" class="c-form__input" type="password" name="password" minlength="1" placeholder="e.g. aBc3?#0O" required>\
            <span class="c-form__valid"></span>\
            <p class="c-form__invalid">Password is invalid</p>\
          </div>\
          <div class="c-form__field">\
            <button class="c-btn c-btn--link" type="reset">Clear</button>\
            <button class="c-btn c-btn--block" type="submit">Log in</button>\
          </div>\
        </form>\
        <p class="c-float__d">\
          You will not be asked again as long as you do not clear your browsing data or history\
          (<a class="js-link c-link" href="#page=privacy" target="_top" data-template="/pages/privacy" data-name="Privacy" aria-label="Privacy page">Read more about how to control your privacy settings</a>).\
        </p>\
      </div>\
    </div>';
    var accessComponent = document.getElementById('accessComponent');
    var accessForm = document.getElementById('form-access');
    var accessField = document.getElementById('form-password');
    if (accessComponent) _buildFallbackLinks(accessComponent); // validate form on submit

    accessForm.addEventListener('submit', function (e) {
      var password = accessField.value;

      if (!accessForm.checkValidity()) {
        // form is invalid - cancel submit
        e.preventDefault(); // we prevent the default submission

        e.stopImmediatePropagation();
      } else if (accessForm.checkValidity() && password !== 'test') {
        // password is invalid - cancel submit
        e.preventDefault(); // we prevent the default submission

        e.stopImmediatePropagation();
        accessField.classList.add('is-invalid');
      } else if (accessForm.checkValidity() && password === 'test') {
        // password is valid - get current template (from history)
        e.preventDefault(); // we prevent the default submission

        e.stopImmediatePropagation();
        localStorage.setItem('access', 'true');

        _getCurrentPageTemplate();
      }
    }); // Confirmation alert before resetting form

    accessForm.addEventListener('reset', function (e) {
      if (confirm('You are about to reset the whole form. Are you happy to proceed?')) {
        accessForm.reset();
      } else {
        e.preventDefault(); // we prevent the default reset

        e.stopImmediatePropagation();
      }
    });
  }
  /**
    * Append a fallback list to a component
    * 
    * @param {Object} el The element of the component
    * @private
    */


  function _buildFallbackLinks(el) {
    if (el) {
      el.appendChild(fallbackLinksComponent);
      var backLink = document.getElementById('loadBack');

      if (backLink) {
        // Back button
        backLink.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          history.back();
        });
      }
    }
  }
  /*** @public ***/


  function linksListener(linkClass) {
    _linksListener(linkClass);
  }

  function hashListener(hashClass, elId) {
    _hashListener(hashClass, elId);
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

  function getAccessToken(accessToken) {
    _getAccessToken(accessToken);
  }

  return {
    linksListener: linksListener,
    hashListener: hashListener,
    callTemplate: callTemplate,
    navStateOrHashChange: navStateOrHashChange,
    getErrorPageTemplate: getErrorPageTemplate,
    getAccessToken: getAccessToken
  };
}();
