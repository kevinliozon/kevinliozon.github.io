"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * CONTROLLER FOR:
 * PROJECTS PAGE
 * 
 * This script will replace the previous page's controller thanks to getPageController method in router module
 */

/**
 * PROMISE - Generates projects as links
 * Final state: Building the navigation listener
 * 
 */
new Promise(function (resolve, reject) {
  if (projects) {
    resolve(); // Detect the links and build their navigation listener
  } else {
    // Will listen to the links across the page in all cases
    reject('Filters element do not exist');
  }
}).then(function (result) {
  var _iterator = _createForOfIteratorHelper(projects),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var project = _step.value;

      if (project.isVisible) {
        document.getElementById('grid').innerHTML += '\
      <article id="project-' + project.id + '" class="c-cell is-filtered ' + project.filters + '">\
        <aside class="c-cell__feat"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-20.69 165.94l-184 184a16 16 0 0 1-22.62 0l-104-104a16 16 0 0 1 0-22.63l22.62-22.62a16 16 0 0 1 22.63 0L184 302.75l150.06-150.06a16 16 0 0 1 22.63 0l22.62 22.62a16 16 0 0 1 0 22.63z" class="c-btn__ico"/><path d="M195.31 381.94a16 16 0 0 1-22.62 0l-104-104a16 16 0 0 1 0-22.63l22.62-22.62a16 16 0 0 1 22.63 0L184 302.74l150.06-150a16 16 0 0 1 22.63 0l22.62 22.62a16 16 0 0 1 0 22.63l-184 184z" class="c-btn__ico--alt"/></svg></aside>\
        <div class="c-cell__info">\
          <header class="c-cell__header">\
            <h3 class="c-cell__title">\
              <a class="js-link c-cell__link"\
              href="' + project.href + '"\
              aria-label="' + project.label + '"\
              data-template="' + project.templatePath + '"\
              data-name="' + project.name + '"\
              target="_top">' + project.name + '</a>\
            </h3>\
            <aside class="c-cell__type"><img src="/assets/icons/' + project.type + '.svg" alt="Case study about ' + project.type + '" class="c-cell__icn"></aside>\
          </header>\
          <footer class="c-cell__footer">\
            <ul id="badges-' + project.id + '" class="c-list"></ul>\
            <p class="c-cell__d">For: ' + project.beneficiary + '</p>\
            <p class="c-cell__d">' + project.desc + '</p>\
          </footer>\
        </div>\
        <figure class="c-cell__fig">\
          <img src="' + project.img + '" alt="' + project.imgAlt + '" class="c-cell__img">\
        </figure>\
      </article>';
        moduleViewRenderer.getViewBadges(project.themes, document.getElementById('badges-' + project.id));
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
