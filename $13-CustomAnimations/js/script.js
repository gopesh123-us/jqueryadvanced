$(function () {
	$('.blue-box').animate(
		{
			'margin-left': '+=200px',
			opacity: 0,
			height: '50px',
			width: '50px',
			'margin-top': '25px',
		},
		1000,
		'swing'
	);
	//challenge - increase the font size of paras
	$('p').animate(
		{
			'font-size': '2em',
		},
		5000
	);
});
