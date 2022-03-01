$(document).ready(function () {
  $("#cb").change(function () {
    //make sure the check box is checked. one way is to do this is go get the checked property prop("checked")
    //this is another way.
    var isChecked = $(this).is(":checked");
    if (isChecked) {
      $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181"); //here and below, the css will be applied to both checkbox and the label that we added here. 
    } else {
      $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811"); 
    }
  });

  $("#selection").change(function () {
    var seletedOption = $(this).find(":selected").text();
    alert("Selected " + seletedOption);

  });
});