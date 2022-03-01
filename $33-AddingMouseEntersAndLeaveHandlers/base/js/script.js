$(document).ready(function () {

  $("#btn-click").click(function (event) {
    console.log(event);
    alert("Button was clicked");
  });

  var box = $(".red-box");
  box.click(function (event) {
    $(this).fadeTo(500, 0.5);
  });
  //box.click();

  $("#btn-hover").hover(function () {
    alert("Button hovered");
  });

  
  $(".green-box").hover(function () {
    $(this).text("I am green");  
  });

  //lecture 33

  //used stop() to stop and animation effect when we mouse enter and leave multiple times.
  // $(".blue-box").mouseenter(function () { 
  //   $(this).stop().fadeTo(500, 0.7);
  // });
  // $(".blue-box").mouseleave(function () { 
  //   $(this).stop().fadeTo(500, 1.0);
  // });
  
  //mini challenge done - same effect as above
  var bluebox = $(".blue-box");
  bluebox.hover(function () {
    bluebox.stop().fadeTo(500, 0.5);
  }, function () {
    bluebox.stop().fadeTo(500, 1.0);
  });

});
