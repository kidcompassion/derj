	// Go Top Button: Mouseover Animation margin 

		
		$(document).ready(function() {
			if(checkBrowserName('MSIE')){ zeroRow="6px"; topRow="-22px" } 
			else if(checkBrowserName('opera')){ zeroRow="6px"; topRow="-22px" }
			else { zeroRow="0px"; topRow="-22px" }
			$("#position1, #position2, #position3, #position4").hover(function() {
				var el = $(this);
				$(this).stop(true, true).animate({
					marginTop: topRow
				}, {
					queue: false,
					duration: 300
				});
			}, function() {
				var el = $(this);
				$(this).stop(true, true).animate({
					marginTop: zeroRow
				}, {
					queue: false,
					duration: 300
				});
			});
		});

	// Navi: Mouseover Animation color 
		$(document).ready(function() {
			$("#eins, #zwei, #drei, #vier").hover(function() {
				var el = $(this);
				$(this).stop(true, true).animate({
					color: '#BA4B27'
				}, {
					queue: false,
					duration: 300
				});
			}, function() {
				var el = $(this);
				$(this).stop(true, true).animate({
					color: '#E8E1D7'
				}, {
					queue: false,
					duration: 300
				});
			});
		});	

		
	
	// Contact: Border link Mouseover Animation 

		$(document).ready(function() {
			$("#right_link").hover(function() {
				var el = $(this);
				$(this).stop(true, true).animate({
					borderBottomWidth: "4px"
				}, {
					queue: false,
					duration: 300
				});
			}, function() {
				var el = $(this);
				$(this).stop(true, true).animate({
					borderBottomWidth: "0px"
				}, {
					queue: false,
					duration: 300
				});
			});
		});

	
	// Contact: SocialButton Mouseover Animation 

		$(document).ready(function() {
			$("#rightsocial ul li").hover(function() {
				var el = $(this);
				$(this).stop(false, false).animate({
					marginTop: "-8px"
				}, {
					queue: false,
					duration: 300
				});
			}, function() {
				var el = $(this);
				$(this).stop(true, true).animate({
					marginTop: "0px"
				}, {
					queue: false,
					duration: 300
				});
			});
		});
	