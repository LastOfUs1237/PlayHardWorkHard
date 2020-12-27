"use strict";

$(document).ready(function () {
  $('.scroll').click(function () {
    if (!$(this).hasClass("active")) {
      $('.scroll.active').removeClass("active");
      $(this).addClass("active");
    }
  });
  $(".scroll_01").click(function () {
    $('html, body').animate({
      scrollTop: $("#slider_points").offset().top
    }, 1000);
  });
  $(".scroll_02").click(function () {
    $('html, body').animate({
      scrollTop: $("#screen_02").offset().top
    }, 1000);
  });
  $(".screen_03").click(function () {
    $('html, body').animate({
      scrollTop: $("#news").offset().top
    }, 1000);
  });
  $(".screen_04").click(function () {
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
    }, 1000);
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 160) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  });
  var slider_1 = $('#slider_section1').lightSlider({
    item: 1,
    loop: true,
    auto: true,
    slideEndAnimation: true,
    pause: 2000
  });
  var slider = $('#slider_wrap').lightSlider({
    item: 3,
    loop: true,
    slideMargin: 30,
    responsive: [{
      breakpoint: 1296,
      settings: {
        item: 2,
        slideMargin: 30
      }
    }, {
      breakpoint: 595,
      settings: {
        item: 1,
        slideMargin: 5
      }
    }],
    onSliderLoad: function onSliderLoad(el) {
      var showActiveSlides = function showActiveSlides(entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
          }
        });
      };

      var imageWidth = el.find("li").outerWidth() + "px";
      var observer = new window.IntersectionObserver(showActiveSlides, {
        root: el.parent()[0],
        rootMargin: "0px " + imageWidth + " 0px " + imageWidth
      });
      el.find("li img").each(function () {
        observer.observe(this);
      });
    }
  });
  $('.previous').on('click', function () {
    slider.goToPrevSlide();
  });
  $('.next').on('click', function () {
    slider.goToNextSlide();
  });
  $('#selector1').lightGallery({
    selector: '.item'
  });
  $(".hamburger").click(function () {
    $(".hamburger").toggleClass("is-active");
    $("#mobile_menu, #menu_shadow").toggleClass("opened");
  });
  $("#menu_shadow").click(function () {
    $(".hamburger").removeClass("is-active");
    $("#mobile_menu, #menu_shadow").removeClass("opened");
  });
});
var map;

function initMap() {
  document.getElementById('map_img').remove();
  document.getElementById('map_link').remove();
  var map = L.map('map').setView([46.96080629911459, 32.02012915353643], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  L.marker([46.96080629911459, 32.02012915353643]).addTo(map).bindPopup('BeetRoot');
}