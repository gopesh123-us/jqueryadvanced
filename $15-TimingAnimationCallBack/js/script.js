$(function () {
	//this lightbox code below is from lession 16th just for demo, so no separate folder is created.
	$(".lightbox").delay(5000).fadeIn(2000);

	$(".red-box").fadeTo(1000, 0.2);
	$(".green-box").delay(1000).fadeTo(1000, 0.5).delay(4000).fadeTo(1000, 0.9);
	$(".orange-box").delay(2000).fadeTo(1000, 0.7, () => {
		//alert("executing callback");
	});
	$(".blue-box").delay(3000).fadeTo(1000, 0.9, () => {
	});
});
