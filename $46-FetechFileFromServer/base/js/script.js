$(function() {
  //create a place in the index file to display the file. pre>code#code
  $("#code").load("js/script.js");
  $("#code").load("idonotexist.php", function (response, status) {
    if (status == "error") {
      alert("Could not fine idonotexist.php");      
    }
    console.log(response);
  });
});