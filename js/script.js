$(document).ready(function() {

	//Video Randomizer
	var vids = ["vid1", "vid2"];
	var video = vids[Math.floor(Math.random() * vids.length)];
	var src = 'video/' + video + '.mp4';
	$("#bg").attr("src", src);

	//Hiding bouncing arrow
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100)
			$('.arrow').fadeOut('slow');
		if ($(this).scrollTop() < 100)
			$('.arrow').fadeIn('slow');
	});

	//Parallax effect
	var $window = $(window);
	var $bgobj = $('video#bg');
	// assigning the object

	$(window).scroll(function() {
		var yPos = ($window.scrollTop() / 150);
		// Put together our final background position
		var coords = (yPos + 40) + '%';
		// Move the background
		$bgobj.css({
			top : coords
		});
	});

	//Counter
	$('#years').html(function() {
		var years = new Date().getFullYear() - 2007;
		$({
			c : 0
		}).animate({
			c : years
		}, {
			step : function(now) {
				$("#years").text(Math.round(now));
			},
			duration : 3500,
			easing : "linear"
		});
	});
	$('#missions').html(function() {
		var missions = 1400;
		$({
			c : 0
		}).animate({
			c : missions
		}, {
			step : function(now) {
				$("#missions").text(Math.round(now));
			},
			duration : 3500,
			easing : "linear"
		});
	});
	$('#years').html(function() {
		var team = 1;
		$({
			c : 0
		}).animate({
			c : team
		}, {
			step : function(now) {
				$("#team").text(Math.round(now));
			},
			duration : 3500,
			easing : "linear"
		});
	});

});

