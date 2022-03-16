"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * CONTROLLER FOR:
 * CONTACT PAGE
 * 
 * This script will replace the previous page's controller thanks to getPageController method in router module
 */

/**
 * PROMISE - Generates controls for contact form
 * Final state: Building the navigation listener
 * 
 */
var contactForm = document.getElementById('form-contact');
var emailField = document.getElementById('form-email');
new Promise(function (resolve, reject) {
  // The form exists
  if (contactForm) {
    resolve(); // We pass all the elements used for controls
  } else reject('Contact form does not exist');
}).then(function (result) {
  // When clicking the button to prefill with @gmail.com
  document.getElementById('btn-email').addEventListener('click', function (e) {
    emailField.value = emailField.value + '@gmail.com';
  }); // validate form on submit

  contactForm.addEventListener('submit', function (e) {
    if (!contactForm.checkValidity()) {
      // form is invalid - cancel submit
      e.preventDefault(); // we prevent the default submission

      e.stopImmediatePropagation();
      var fields = contactForm.querySelectorAll(':invalid'); // Assigns the is-invalid class to all elements marqued as :invalid

      var _iterator = _createForOfIteratorHelper(fields),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var field = _step.value;
          field.classList.add('is-invalid');
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else if (contactForm.checkValidity()) {
      if (confirm('This email will be sent to me. Are you happy to proceed?')) {
        contactForm.submit();
      }
    }
  }); // Confirmation alert before resetting form

  contactForm.addEventListener('reset', function (e) {
    if (confirm('You are about to reset the whole form. Are you happy to proceed?')) {
      contactForm.reset();
    } else {
      e.preventDefault(); // we prevent the default reset

      e.stopImmediatePropagation();
    }
  });
}, function (err) {
  return console.error('error:', err);
})["finally"](function () {
  moduleRouter.linksListener('js-link');
});
