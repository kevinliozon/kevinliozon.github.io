"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var moduleNav = function () {
  /**
    * Generate the main navigation for header and footer
    * 
    * @private
    */
  function _buildNavMain() {
    var _iterator = _createForOfIteratorHelper(pages),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
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
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  /**
    * Generate the main navigation for header and footer
    * 
    * @private
    */


  function _buildNavAlt() {
    var _iterator2 = _createForOfIteratorHelper(externalPages),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
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
      _iterator2.e(err);
    } finally {
      _iterator2.f();
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
    var _iterator3 = _createForOfIteratorHelper(anchors),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
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
      _iterator3.e(err);
    } finally {
      _iterator3.f();
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
    var _iterator4 = _createForOfIteratorHelper(links),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
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
      _iterator4.e(err);
    } finally {
      _iterator4.f();
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
