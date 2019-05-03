/* global $ */
$(function(){
  $("#signup-btn, #login-btn").on("click", function(){
    $("#signup-btn").toggle();
    $("#login-btn").toggle();
    $("#signup-form").toggle();
    $("#login-form").toggle();
  })
})

