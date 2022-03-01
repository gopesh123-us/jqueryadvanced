$(document).ready(function () {
  $("html").keydown(function (e) { 
    console.log(e.which);
    
  });
  var ARROW_RIGHT = 39;
  var ARROW_LEFT = 37;
  $("html").keydown(function (event) {
    if (event.which == ARROW_RIGHT) {
      $(".blue-box").stop().animate({
        marginLeft: "+=10px"
      }, 50);
    }
  });
  $("html").keydown(function (e) {
    if (e.which == ARROW_LEFT) {
      $(".blue-box").stop().animate({
        marginLeft: "-=10px"
      }, 50);
    }
  });
});