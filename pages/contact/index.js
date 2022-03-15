'use strict';

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
  });

  // validate form on submit
  contactForm.addEventListener('submit', function (e) {
    if (!contactForm.checkValidity()) {
      // form is invalid - cancel submit
      e.preventDefault(); // we prevent the default submission
      e.stopImmediatePropagation();
      var fields = contactForm.querySelectorAll(':invalid');
      // Assigns the is-invalid class to all elements marqued as :invalid
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var field = _step.value;
          field.classList.add('is-invalid');
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
    } else if (contactForm.checkValidity()) {
      if (confirm('This email will be sent to me. Are you happy to proceed?')) {
        contactForm.submit();
      }
    }
  });

  // Confirmation alert before resetting form
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
}).finally(function () {
  moduleRouter.linksListener('js-link');
});
