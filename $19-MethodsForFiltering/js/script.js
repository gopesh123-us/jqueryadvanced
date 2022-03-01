//Filtering!! - Reduces the set based on criteria
$(document).ready(function () {
	//$("#list").children("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
	//console.log($("#list").children("li"));
	/* $("li").filter(function (index) {
        return true;
    }).css("background-color", "rgba(180, 180, 30, 0.8)"); */

	/*  $("li").filter(function (index) {
        return false;
    }).css("background-color", "rgba(180, 180, 30, 0.8)"); */

	/* $("li").filter(function (index) {
        return index % 3 === 1;
    }).css("background-color", "rgba(180, 180, 30, 0.8)");
    console.log($("li")); */

	/* $("li").last().css("background-color", "rgba(180, 180, 30, 0.8)");
    console.log($("li")); */

	/*  $("li").eq(0).css("background-color", "rgba(180, 180, 30, 0.8)");
    console.log($("li")); */

	/* $("li").eq(-1).css("background-color", "rgba(180, 180, 30, 0.8)");
    console.log($("li")); */

	/* $("li").not(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
    console.log($("li")); */

	$('li').not(':first').css('background-color', 'rgba(180, 80, 30, 0.8)');
	console.log($('li'));
});
