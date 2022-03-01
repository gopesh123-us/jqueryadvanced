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

});
