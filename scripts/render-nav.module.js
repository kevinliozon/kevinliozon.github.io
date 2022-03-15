'use strict';

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var moduleNav = function () {

  /**
    * Generate the main navigation for header and footer
    * 
    * @private
    */
  function _buildNavMain() {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = pages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var page = _step.value;

        if (page.isVisible) {
          if (page.isMain) {
            wrapHeaderNav.innerHTML += '<a\
          class="c-nav__link l-header__nav__link js-link--nav"\
          href="' + page.href + '"\
          aria-label="' + page.label + '"\
          data-template="' + page.templatePath + '"\
          data-name="' + page.name + '"\
          target="_top">' + page.name + '</a>';
          } else {
            wrapFooterNav.innerHTML += '<a\
          class="c-nav__link l-footer__nav__link js-link--nav"\
          href="' + page.href + '"\
          aria-label="' + page.label + '"\
          data-template="' + page.templatePath + '"\
          data-name="' + page.name + '"\
          target="_top">' + page.name + '</a>';
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  /**
    * Generate the main navigation for header and footer
    * 
    * @private
    */
  function _buildNavAlt() {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = externalPages[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var externalPage = _step2.value;

        if (externalPage.isVisible) {
          wrapFooterNavAlt.innerHTML += '<a\
        class="c-nav__link l-footer__nav__link"\
        href="' + externalPage.href + '"\
        aria-label="' + externalPage.label + '"\
        data-template="' + externalPage.templatePath + '"\
        data-name="' + externalPage.name + '"\
        target="_blank">\
        ' + externalPage.name + '\
        </a>';
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  /**
    * Generate a list with anchors for the current page
    * 
    * @param {Object} el The parent element
    * @param {Array} links The array of links
    * 
    * @private
    */
  function _buildHashList(el, anchors) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = anchors[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var hash = _step3.value;

        el.innerHTML += '\
      <li class="c-list__i">\
        <a class="c-link js-link--hash"\
        href="' + hash.href + '"\
        aria-label="' + hash.label + '"\
        data-name="' + hash.target + '">' + hash.name + '</a>\
      </li>';
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  }

  /**
    * Generate a list with links to other pages
    * 
    * @param {Object} el The parent element
    * @param {Array} links The array of links
    * 
    * @private
    */
  function _buildNavList(el, links) {
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = links[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var link = _step4.value;

        el.innerHTML += '\
      <li class="c-list__i">\
        <a class="c-link js-link"\
        href="' + link.href + '"\
        aria-label="' + link.label + '"\
        data-template="' + link.templatePath + '"\
        data-name="' + link.name + '"\
        target="_top">' + link.name + '</a>\
      </li>';
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }
  }

  function buildNavMain() {
    _buildNavMain();
  }

  function buildNavAlt() {
    _buildNavAlt();
  }

  function buildHashList(el, anchors) {
    _buildHashList(el, anchors);
  }

  function buildNavList(el, links) {
    _buildNavList(el, links);
  }

  return {
    buildNavMain: buildNavMain,
    buildNavAlt: buildNavAlt,
    buildHashList: buildHashList,
    buildNavList: buildNavList
  };
}();
