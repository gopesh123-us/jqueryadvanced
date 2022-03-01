$(document).ready(function () {
	$('.blue-box').animate(
		{
			'margin-left': '+=200px',
			'margin-top': '+=200px',
		},
		2000,
		'linear'
	);
	$('.blue-box').animate(
		{
			'margin-left': '-=200px',
			'margin-top': '-=200px',
		},
		2000,
		'swing'
	);
});
