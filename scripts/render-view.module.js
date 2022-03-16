"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var moduleViewRenderer = function () {
  /**
   * Populate the wrapView element with the targeted HTML template
   * 
   * @param {String} activeTemplate The relative path to the template
   * @param {Object} wrapView The element where the content should be injected
   */
  function _getViewTemplate(activeTemplate, wrapView) {
    fetch(activeTemplate, {
      method: 'GET'
    }).then(function (response) {
      if (response.status !== 404) {
        return response.text(); // turn HTML response into a string
      } else {
        return wrapView.parentNode.removeChild(wrapView); // remove the container of the non-existant content
      }
    }).then(function (content) {
      return wrapView.innerHTML = content;
    })["catch"](function (error) {
      return console.error('error:', error);
    });
  }
  /**
   * Fetch an array of values and turn them into badges
   * 
   * @param {Array} items 
   * @returns badgesList
   */


  function _getViewBadges(items, el) {
    var _iterator = _createForOfIteratorHelper(items),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        el.innerHTML += '<li class="c-badge">' + item + '</li>';
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  /**
   * Turn each image into a listener for displaying a modal
   * The modal populates from the content of the clicked image 
   * 
   * @param {Object} wrapModal the modal window
   * @private
   */


  function _getViewImageModal(wrapModal, img, caption) {
    wrapModal.container.style.display = 'flex'; // display the modal

    wrapModal.image.src = img.src; // populate the modal with the image

    wrapModal.caption.innerHTML = caption.innerHTML; // populate the modal with the cpation

    wrapModal.close.focus(); // focus the close button for easy dismissal
  }
  /**
   * Displays the slide relevant to the active index
   * Updates controls depending on slide number:
   * - first disables prev button
   * - last disables next button
   * 
   * @param {Number} index the index of the slide
   * @param {Object} slideToDisplay the slide item
   * @private
   */


  function _getViewSlide(index, slideToDisplay) {
    var slides = document.querySelectorAll('.c-slide'); // Get a NodeList of all .c-slide elements

    selectedSlideIndex = index;

    var _iterator2 = _createForOfIteratorHelper(slides),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var slide = _step2.value;
        slide.style.display = 'none';
      } // Hide all slides

    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    if (index === 1) {
      document.getElementById('sliderPrev').disabled = true; // if first slide, prev button is disabled

      document.getElementById('sliderNext').disabled = false; // if first slide, prev button is disabled
    } else if (index === document.querySelectorAll('.c-slideselector__btn').length) {
      document.getElementById('sliderNext').disabled = true; // if first slide, prev button is disabled

      document.getElementById('sliderPrev').disabled = false; // if first slide, prev button is disabled
    } else {
      document.getElementById('sliderPrev').disabled = false; // if first slide, prev button is disabled

      document.getElementById('sliderNext').disabled = false; // if first slide, prev button is disabled
    }

    slideToDisplay.style.display = 'flex'; // display the relevant slide
  }
  /**
   * Highlights the thumbnail relevant to the active slide and tone done the rest
   * 
   * @param {Array} slideThumbs All slides thumbnails
   * @param {Object} slideThumbActive the slide thumbnail item
   * @param {Number} index the index of the slide
   * @private
   */


  function _getActiveSlideThumbnail(slideThumbs, slideThumbActive, selectedSlideIndex) {
    var _iterator3 = _createForOfIteratorHelper(slideThumbs),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var slideThumb = _step3.value;
        slideThumb.classList.remove('u-active');
      } // all images are not active anymore

    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    slideThumbActive = document.body.querySelector('.c-slideselector__btn[data-slideindex="' + selectedSlideIndex + '"]'); // Get the slide with equivalent index

    slideThumbActive.classList.add('u-active'); // selected image is active
  }
  /**
   * Monitor the DOM
   * If clickable images are detected => run the script to make them clickable then disconnect
   * 
   * @param {Object} wrapTemplate the main wrap
   * @param {Object} wrapModal the modal window
   * @private
   */


  function _imagesListener(wrapTemplate, wrapModal) {
    var _this = this;

    var observer = new MutationObserver(function () {
      var images = document.querySelectorAll('.js-img'); // all images we can interact with
      // If there is at least one image

      if (images.length > 0) {
        // Array with all image links
        var _iterator4 = _createForOfIteratorHelper(images),
            _step4;

        try {
          var _loop = function _loop() {
            var imgWrap = _step4.value;
            // Event listener on each image
            imgWrap.addEventListener('click', function (e) {
              if (_this.hasAttribute('data-slideindex')) {
                var index = parseInt(_this.dataset.slideindex);

                var _iterator5 = _createForOfIteratorHelper(images),
                    _step5;

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var img = _step5.value;
                    img.classList.remove('u-active');
                  } // all images are not active anymore

                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }

                _this.classList.add('u-active'); // selected image is active


                _getViewSlide(index, document.body.querySelector('.c-slide[data-slide="' + index + '"]')); // the image we click on is a slider selector

              } else {
                _getViewImageModal(wrapModal, imgWrap.querySelector('.c-fig__img'), imgWrap.querySelector('.c-fig__c'));
              }

              observer.disconnect(); // We can disconnect since images have been found
            }, false);
          };

          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    });
    observer.observe(wrapTemplate, {
      attributes: false,
      childList: true,
      subtree: true
    }); // observes the main wrap for DOM changes
  }
  /**
   * Handles the logic for side menu of single project page on mobile
   * Side menu is always closed when interracting with the page
   * apart if already closed and we click on the burger icon
   * 
   */


  function _getViewSidebar() {
    var sidebar = document.getElementById('sidebar');
    var burger = document.getElementById('burger-menu');
    var isOpen = false; // we list all the elements that handle the side menu toggling (both open and close)

    var _iterator6 = _createForOfIteratorHelper(document.querySelectorAll('#content, #header, #footer, #burger-menu, .js-link--hash')),
        _step6;

    try {
      var _loop2 = function _loop2() {
        var sidebarTrigger = _step6.value;
        sidebarTrigger.addEventListener('click', function (e) {
          if (sidebarTrigger === document.getElementById('burger-menu') && !isOpen) {
            // Are we interracting with the burger menu icon while the menu is closed?
            sidebar.classList.add('is-open');
            burger.classList.add('is-open');
            isOpen = true;
          } else if (isOpen) {
            // Are we interracting with all the content while the menu is open?
            sidebar.classList.remove('is-open');
            burger.classList.remove('is-open');
            isOpen = false;
          }
        });
      };

      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        _loop2();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }
  /*** @public METHODS ***/


  function getViewTemplate(activeTemplate, wrapView) {
    _getViewTemplate(activeTemplate, wrapView);
  }

  function getViewBadges(items, el) {
    _getViewBadges(items, el);
  }

  function imagesListener(wrapTemplate, wrapModal) {
    _imagesListener(wrapTemplate, wrapModal);
  }

  function getViewSidebar() {
    _getViewSidebar();
  }

  function getViewSlide(index, slideToDisplay) {
    _getViewSlide(index, slideToDisplay);
  }

  function getActiveSlideThumbnail(slideThumbs, slideThumbActive, selectedSlideIndex) {
    _getActiveSlideThumbnail(slideThumbs, slideThumbActive, selectedSlideIndex);
  }

  return {
    getViewTemplate: getViewTemplate,
    getViewBadges: getViewBadges,
    imagesListener: imagesListener,
    getViewSidebar: getViewSidebar,
    getViewSlide: getViewSlide,
    getActiveSlideThumbnail: getActiveSlideThumbnail
  };
}();
