"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * CONTROLLER FOR:
 * HOME PAGE
 * 
 * This script will replace the previous page's controller thanks to getPageController method in router module
 */

/**
 * PROMISE - Generates projects as links and brands
 * Final state: Building the navigation listener
 * 
 */
new Promise(function (resolve, reject) {
  if (projectsHome && brands) {
    resolve(); // Detect the links and build their navigation listener
  } else {
    // Will listen to the links across the page in all cases
    reject('Filters element do not exist');
  }
}).then(function (result) {
  slideIndex = 1; // first slide is 1 - don't remove

  selectedSlideIndex = slideIndex; // reset default slide index

  moduleViewRenderer.imagesListener(wrapTemplate, wrapModal); // Building the images listener
  // generate projects in grid

  var _iterator = _createForOfIteratorHelper(projectsHome),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var project = _step.value;
      document.getElementById('grid').innerHTML += '\
    <article id="project-' + project.id + '" class="c-cell c-cell--lg">\
      <div class="c-cell__info">\
        <header class="c-cell__header">\
          <h3 class="c-cell__title">\
            <a class="js-link--content c-cell__link"\
            href="' + project.href + '"\
            aria-label="' + project.label + '"\
            data-template="' + project.templatePath + '"\
            data-name="' + project.name + '"\
            target="_top">' + project.name + '</a>\
          </h3>\
        </header>\
        <footer class="c-cell__footer">\
          <ul id="badges-' + project.id + '" class="c-list"></ul>\
          <p class="c-cell__d">' + project.desc + '</p>\
        </footer>\
      </div>\
      <figure class="c-cell__fig">\
        <img src="' + project.img + '" alt="' + project.imgAlt + '" class="c-cell__img">\
      </figure>\
    </article>';
      moduleViewRenderer.getViewBadges(project.themes, document.getElementById('badges-' + project.id)); // generate badges
    } // generate projects in carousel

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(projectsCarousel),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _project = _step2.value;
      document.getElementById('carouselSlider').innerHTML += '\
    <article id="slide-' + _project.id + '" class="c-slide" data-slide="' + slideIndex + '">\
      <div class="c-slide__info">\
        <header class="c-slide__header">\
          <h3 class="c-slide__title">\
            <a class="js-link--content c-slide__link"\
            href="' + _project.href + '"\
            aria-label="' + _project.label + '"\
            data-template="' + _project.templatePath + '"\
            data-name="' + _project.name + '"\
            target="_top">' + _project.name + '</a>\
          </h3>\
        </header>\
        <footer class="c-slide__footer">\
          <ul id="badges-' + _project.id + '" class="c-list"></ul>\
          <p class="c-slide__d">' + _project.desc + '</p>\
        </footer>\
      </div>\
      <figure class="c-slide__fig">\
        <img src="' + _project.img + '" alt="' + _project.imgAlt + '" class="c-slide__img">\
      </figure>\
    </article>';
      document.getElementById('carouselSelector').innerHTML += '\
    <button id="slideIndex-' + _project.id + '" class="c-btn c-slideselector__btn js-img" data-slideindex="' + slideIndex + '">\
      <img class="c-fig__img c-btn__img" src="' + _project.img + '" alt="' + _project.imgAlt + '">\
    </button>';
      slideIndex++; // slide increment by +1 for each additional one

      moduleViewRenderer.getViewBadges(_project.themes, document.getElementById('badges-' + _project.id)); // generate badges
    } // generate brands

  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var _iterator3 = _createForOfIteratorHelper(brands),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var brand = _step3.value;
      document.getElementById('brands').innerHTML += '\
    <figure id="brand-' + brand.id + '" class="c-fig c-section__i">\
        <img src="' + brand.img + '" alt="' + brand.imgAlt + '" class="c-fig__img">\
    </figure>';
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}, function (err) {
  return console.error('error:', err);
})["finally"](function () {
  /* variables */
  var prevBtn = document.getElementById('sliderPrev');
  var nextBtn = document.getElementById('sliderNext');
  var slideThumbs = document.querySelectorAll('.c-slideselector__btn'); // Get a NodeList of all .c-slide elements

  var slideThumbActive = document.body.querySelector('.c-slideselector__btn[data-slideindex="' + selectedSlideIndex + '"]'); // Get the slide with equivalent index

  var slideToDisplay = document.body.querySelector('.c-slide[data-slide="' + selectedSlideIndex + '"]');
  /* modules */

  moduleRouter.linksListener('js-link--content');
  moduleViewRenderer.getViewSlide(selectedSlideIndex, slideToDisplay); // default thumbnail selected

  /* set default */

  prevBtn.disabled = true; // when page load, prev button is disabled

  slideThumbActive.classList.add('u-active'); // when page load, first item is active

  prevBtn.addEventListener('click', function (e) {
    // We can go to previous as long as the first slide is not selected
    if (selectedSlideIndex > 1) {
      nextBtn.disabled = false; // enables next button

      selectedSlideIndex -= 1; // decrement of 1

      if (selectedSlideIndex <= 1) {
        prevBtn.disabled = true; // if first slide, prev button is disabled
      }

      slideToDisplay = document.body.querySelector('.c-slide[data-slide="' + selectedSlideIndex + '"]'); // update slide by dataset

      moduleViewRenderer.getActiveSlideThumbnail(slideThumbs, slideThumbActive, selectedSlideIndex); // highlights thumbnail

      moduleViewRenderer.getViewSlide(selectedSlideIndex, slideToDisplay); // displays slide
    } else {
      prevBtn.disabled = true;
    }
  });
  nextBtn.addEventListener('click', function (e) {
    // we use the number of thumbnails as a reference for the max number of slides
    // As long as index below that value then we can go to the next
    if (selectedSlideIndex < slideThumbs.length) {
      prevBtn.disabled = false; // enables prev button

      selectedSlideIndex += 1; // increment of 1

      if (selectedSlideIndex >= slideThumbs.length) {
        nextBtn.disabled = true; // if last slide, next button is disabled
      }

      slideToDisplay = document.body.querySelector('.c-slide[data-slide="' + selectedSlideIndex + '"]'); // targets slide by dataset

      moduleViewRenderer.getActiveSlideThumbnail(slideThumbs, slideThumbActive, selectedSlideIndex); // highlights thumbnail

      moduleViewRenderer.getViewSlide(selectedSlideIndex, slideToDisplay); // displays slide
    } else {
      nextBtn.disabled = true;
    }
  });
});
