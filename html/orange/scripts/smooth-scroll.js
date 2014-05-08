/* Copyright by © 2012 andersdenkend */

$(document).ready(function() {
	$('a[href^="#"]').click(function(event) {
		var id = $(this).attr("href");
		var offset = 60;
		var target = $(id).offset().top - offset;
		$('html, body').animate({scrollTop:target}, 1000);
		event.preventDefault();
	});
});
