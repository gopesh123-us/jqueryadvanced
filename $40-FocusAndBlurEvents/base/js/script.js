$(document).ready(function () {
  
  //get all the input fields / excluded range selector and submit button.
  var inputfields = $("input:text, input:password, input[type=email], textarea");

  //create a focus event on the inputfields
  inputfields.focus(function () {
    $(this).css("box-shadow", "0 0 4px #666").css("border", "1");
  });

  inputfields.blur(function () {
    $(this).css("box-shadow", "none");
  });

  $("#name").blur(function () {
    if ($(this).val().length < 3) {
      $(this).css("box-shadow", "0 0 4px #811");
    } 
    else {
      $(this).css("box-shadow", "0 0 4px #181");
    }
  });



});