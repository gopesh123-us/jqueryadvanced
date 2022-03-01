$(document).ready(function () {
  //add event to the parent and write specific elements like 'p' as a parameter to the function on().
  $("#content").on('click', 'p', function () {
    $(this).slideUp();
  })
  $("#content").append("<h1>Dynamically added content</h1>");
  $("#content").append("<p>this is a dynamically added para</p>");

  $("body").on('mouseenter', 'li', function () {
    $(this).stop().css("color", "#447788");
  });
  $("body").on('mouseleave', 'li', function () {
    $(this).stop().css("color", "#000000");
  });
  $("ul:first").append("<li><strong>Dynamically added list item</strong></li>");
});