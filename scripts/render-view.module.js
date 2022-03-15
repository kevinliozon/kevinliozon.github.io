'use strict';

var moduleViewRenderer = function () {
  /**
   * Populate the wrapView element with the targeted HTML template
   * 
   * @param {String} activeTemplate The relative path to the template
   * @param {Object} wrapView The element where the content should be injected
   */
  function _getViewTemplate(activeTemplate, wrapView) {
    wrapView.innerHTML = 'loading...';

    fetch(activeTemplate, { method: 'GET' }).then(function (response) {
      if (response.status !== 404) {
        return response.text(); // turn HTML response into a string
      } else {
        return wrapView.parentNode.removeChild(wrapView); // remove the container of the non-existant content
      }
    }).then(function (content) {
      return wrapView.innerHTML = content;
    }).catch(function (error) {
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
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        el.innerHTML += '<li class="c-badge">' + item + '</li>';
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
    slides.forEach(function (slide) {
      return slide.style.display = 'none';
    }); // Hide all slides

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
    slideThumbs.forEach(function (slideThumb) {
      return slideThumb.classList.remove('u-active');
    }); // all images are not active anymore
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
    var observer = new MutationObserver(function () {
      var images = document.querySelectorAll('.js-img'); // all images we can interact with

      // If there is at least one image
      if (images.length > 0) {
        // Array with all image links
        images.forEach(function (imgWrap) {
          // Event listener on each image
          imgWrap.addEventListener('click', function (e) {
            if (this.hasAttribute('data-slideindex')) {
              var index = parseInt(this.dataset.slideindex);
              images.forEach(function (img) {
                return img.classList.remove('u-active');
              }); // all images are not active anymore
              this.classList.add('u-active'); // selected image is active
              _getViewSlide(index, document.body.querySelector('.c-slide[data-slide="' + index + '"]')); // the image we click on is a slider selector
            } else {
              _getViewImageModal(wrapModal, imgWrap.querySelector('.c-fig__img'), imgWrap.querySelector('.c-fig__c'));
            }
            observer.disconnect(); // We can disconnect since images have been found
          }, false);
        });
      }
    });

    observer.observe(wrapTemplate, { attributes: false, childList: true, subtree: true }); // observes the main wrap for DOM changes
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
    var isOpen = false;

    // we list all the elements that handle the side menu toggling (both open and close)
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      var _loop = function _loop() {
        var sidebarTrigger = _step2.value;

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

      for (var _iterator2 = document.querySelectorAll('#content, #header, #footer, #burger-menu, .js-link--hash')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        _loop();
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