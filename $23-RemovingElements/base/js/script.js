$(document).ready(function () {
  var header2 = $('#header-2');
  header2.append("<h1 id='header1'>Hello I just got appended</h1>");
  header2.on('click', function (e) {
    $('#header1').hide();
  })

  //adding new elements - we can do this in various ways. One is append
  //$("ul ul:first").prepend("<li>I am the last item (method one)</li>");
  //$("<li>I am appenedTo this place (method two)</li>").prependTo($("ul ul:last"));

  //add an element as a next sibling
  //$(".red-box").after("<div class='red-box'>Another Red Box (After)</div>");
  //$(".blue-box").before("<div class='blue-box'>Another Blue Box (Before)</div>");
  //$(".blue-box").before($(".red-box"));
  //$(".blue-box").after($(".green-box"));
  
  //replacing elements
  $("li").replaceWith(function () {
    return "<li>Replaced.</li>";
  });
  $("p:last").replaceWith(function () {
    return $(".blue-box")
  });

  $('<div class="pink-box">Pink Box</div>').replaceAll(".green-box");  

  //$(!"input").remove();
  //$(!"textarea").remove();
  /**
   * removing all direct children but not input type text, textarea or br
   */
  $("form").children().not("input:text, textarea, br").remove();
  //$("form").children().remove();

  //using detach() - it will rmember the data and eventlisteners
  var detachItem = $("li").detach();
  //now attaching it to header-2
  $("#header-2").append(detachItem);

  //another similar function to remove - it will not remove the element but will clear the data
  $("p:first").empty();
  $(".red-box, .green-box, .pink-box, .blue-box").empty();
});
