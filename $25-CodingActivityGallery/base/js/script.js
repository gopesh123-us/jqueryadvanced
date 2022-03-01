$(document).ready(function () {

  //using attr()
  var speciallink = $("#special-link");
  console.log(speciallink);
  console.log(speciallink.attr("href"));
  console.log(speciallink.attr("title"));
  speciallink.attr("href", "http://www.google.com"); 

  //using prop()
  var checkbox = $("input:checkbox");
  console.log(checkbox.prop("checked"));  

  //using val()
  var textInput = $("input:text:first");
  console.log(textInput.val());

  var rangeInput = $("input[type='range']");
  rangeInput.val("3");
  console.log(rangeInput.val());

  textInput.val("Gopesh Sharma");

});
