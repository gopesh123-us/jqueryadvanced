$(document).ready(function () {
  $("#form-1").submit(function (e) {
    var textmessagearea = $("#msg");
    if (textmessagearea.val().trim() == "") {
      textmessagearea.css("box-shadow", "0 0  4px #811");
      e.preventDefault();
    } else {
      textmessagearea.css("box-shadow", "0 0  4px #181");
    }
  });
});