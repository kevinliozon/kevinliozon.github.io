"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * CONTROLLER FOR:
 * SITEMAP PAGE
 * 
 * This script will replace the previous page's controller thanks to getPageController method in router module
 */

/**
 * PROMISE - Generates links to projects
 * Final state: Building the navigation listener
 * 
 */
new Promise(function (resolve, reject) {
  if (projects) {
    resolve(projects); // We pass all the elements used for controls
  } else {
    // Will listen to the links across the page in all cases
    reject('Pojects do not exist');
  }
}).then(function (result) {
  var _iterator = _createForOfIteratorHelper(result),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var project = _step.value;

      if (project.isVisible) {
        document.getElementById('projects-list').innerHTML += '\
      <li class="c-list__i">\
        <a class="c-link js-link"\
        href="' + project.href + '"\
        aria-label="' + project.label + '"\
        data-template="' + project.templatePath + '"\
        data-name="' + project.name + '"\
        target="_top">' + project.name + '</a>\
      </li>';
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}, function (err) {
  return console.error('error:', err);
})["finally"](function () {
  moduleRouter.linksListener('js-link');
});
