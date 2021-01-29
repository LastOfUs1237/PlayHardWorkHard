"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  var _$$lightSlider;

  var slider = $('#slider_list').lightSlider((_$$lightSlider = {
    item: 4,
    slideMove: 4,
    slideMargin: 20,
    speed: 2000,
    controls: false
  }, _defineProperty(_$$lightSlider, "speed", 1000), _defineProperty(_$$lightSlider, "responsive", [{
    breakpoint: 1250,
    settings: {
      item: 3,
      slideMove: 3
    }
  }, {
    breakpoint: 900,
    settings: {
      item: 2,
      slideMove: 2
    }
  }, {
    breakpoint: 650,
    settings: {
      item: 1,
      slideMove: 1
    }
  }]), _$$lightSlider));
  $('#previous').on('click', function () {
    slider.goToPrevSlide();
  });
  $('#next').on('click', function () {
    slider.goToNextSlide();
  });
});