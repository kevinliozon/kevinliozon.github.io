'use strict';

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
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = result[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
}, function (err) {
  return console.error('error:', err);
}).finally(function () {
  moduleRouter.linksListener('js-link');
});
