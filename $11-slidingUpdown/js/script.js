$(function () {
	$('.blue-box').slideUp(1000);
	$('.blue-box').slideDown(1000);
	$("p").hide();
	$("#readless").hide();
	$("#readmore").on('click', (e) => {
		$("p").toggle(1000);
		$("#readless").show();
		$("#readmore").hide();
		e.preventDefault();
	}); 
});
