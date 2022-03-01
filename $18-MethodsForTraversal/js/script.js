$(function () {
	//$("p").css("background-color", "rgba(222, 244, 64, 0.8)");
	// $("#list").find("ul").css("background-color", "rgba(2, 244, 64, 0.8)");
	//$("h2").add("p").add("input:text").css("background-color", "rgba(2, 244, 64, 0.8)");
	//$("#li3").children().css("background-color", "rgba(2, 244, 64, 0.8)");
	// $("#li3").each(function () {
	//     alert($(this).text());
	// });
	//$("li").filter(".sub").css("background-color", "rgba(2, 244, 64, 0.8)");
	// if ($("h1").parent().is("div")) {
	//     alert("found div");
	// };
	// $("ul").offsetParent().css("background-color", "rgba(2, 244, 64, 0.8)");
	// console.log($("ul").offsetParent());
	$('input:last').css('background-color', 'rgba(2, 244, 64, 0.8)');
	//$(":header").css("background-color", "rgba(2, 244, 64, 0.8)");
	$(':header')
		.next()
		.css('background-color', 'rgba(122, 44, 64, 0.8)', 'color', 'white'); //mini challenge
	// $("form").children("input").css("background-color", "rgba(2, 244, 64, 0.8)");
});
