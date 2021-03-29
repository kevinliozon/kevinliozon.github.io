"use strict";

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
    var _iterator = _createForOfIteratorHelper(pages),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var page = _step.value;

        if (page.isMain) {
          wrapHeaderNav.innerHTML += '<a\
        class="nav__link js-link--nav"\
        href="' + page.href + '"\
        aria-label="' + page.label + '"\
        data-template="' + page.templatePath + '"\
        target="_top">\
        ' + page.name + '\
        </a>';
        } else {
          wrapFooterNav.innerHTML += '<a\
        class="nav__link js-link--nav"\
        href="' + page.href + '"\
        aria-label="' + page.label + '"\
        data-template="' + page.templatePath + '"\
        target="_top">\
        ' + page.name + '\
        </a>';
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
        wrapFooterNavAlt.innerHTML += '<a\
      class="nav__link--external"\
      href="' + externalPage.href + '"\
      aria-label="' + externalPage.label + '"\
      data-template="' + externalPage.templatePath + '"\
      target="_blank">\
      ' + externalPage.name + '\
      </a>';
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  /**
    * Generate the main navigation for header and footer
    * 
    * @private
    */


  function _buildNavProject(el) {
    var _iterator3 = _createForOfIteratorHelper(projectFragments),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var projectFragment = _step3.value;
        el.innerHTML += '<div>\
      <a class="js-link--hash"\
      href="' + projectFragment.href + '"\
      aria-label="' + projectFragment.label + '"\
      data-hash="' + projectFragment.hash + '">\
      ' + projectFragment.name + '\
      </a></div>';
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }

  function buildNavMain() {
    _buildNavMain();
  }

  function buildNavAlt() {
    _buildNavAlt();
  }

  function buildNavProject(el) {
    _buildNavProject(el);
  }

  return {
    buildNavMain: buildNavMain,
    buildNavAlt: buildNavAlt,
    buildNavProject: buildNavProject
  };
}();
