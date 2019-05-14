/* global $ */
document.addEventListener("turbolinks:load", function() {
  $("#signup-btn, #login-btn").on("click", function(){
    $("#signup-btn").toggle();
    $("#login-btn").toggle();
    $("#signup-form").toggle();
    $("#login-form").toggle();
  })
  
  $("#training-btn").on("click", function(){
    $("#training-create").addClass("training-create");
    $("#training-wrapper").show();
    $("#training-wrapper").addClass("training-wrapper");
    $("#training").show();
    $("#training").addClass("training");
  })
  
  $("#training-create").on("click", function(){
    $("#training-create").removeClass("training-create");
    $("#training").hide();
    $("#training").removeClass("training");
    $("#training-wrapper").hide();
    $("#training-wrapper").removeClass("training-wrapper");
  })
})