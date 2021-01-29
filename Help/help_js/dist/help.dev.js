"use strict";

$(document).ready(function () {
  $('.questions').click(function () {
    if ($(this).parents(".col_01").hasClass("active")) {
      $(this).next(".text").slideUp(200);
      $(this).parents(".col_01").removeClass("active");
    } else {
      $(".col_01.active").find(".text").slideUp(200);
      $(".col_01.active").removeClass("active");
      $(this).next(".text").slideDown(200);
      $(this).parents(".col_01").addClass("active");
    }
  });
});