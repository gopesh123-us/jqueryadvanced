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

});
