/**
 * @author Gleb Zaveruha
 */
$(document).ready(function() {
	//Options
	var speed = 1000;
	//Fade speed
	var autoswitch = false;
	//Autosliderr option
	var autoswitch_speed = 4000;
	//Auto sliderr Speed

	//Add Initial Active Class
	$('.slider').first().addClass('active');

	//Hide All sliders
	$('.slider').hide();

	$('.rr').hide();

	//Show First slider
	$('.active').show();

	//Navigation forward
	$('.next').on('click', function() {
		$('.rr').fadeIn(speed);

		$('.active').removeClass('active').addClass('oldActive');
		if ($('.oldActive').is(':last-child')) {
			$('.slider').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}

		$('.oldActive').removeClass('oldActive');
		$('.slider').fadeOut(speed);
		$('.active').fadeIn(speed);

		if ($('.slider').first().hasClass('active')) {
			$('.rr').fadeOut(speed);
		}

		return false;
	});

	//Navigation reverse
	$('.prev').on('click', function() {

		$('.active').removeClass('active').addClass('oldActive');

		if ($('.oldActive').is(':first-child')) {
			$('.slider').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}

		$('.oldActive').removeClass('oldActive');
		$('.slider').fadeOut(speed);
		$('.active').fadeIn(speed);

		if ($('.slider').first().hasClass('active')) {
			$('.rr').fadeOut(speed);
		}

	});

	//Autoswith
	if (autoswitch) {
		setInterval(function() {
			$('.active').removeClass('active').addClass('oldActive');

			if ($('.oldActive').is(':last-child')) {
				$('.slider').first().addClass('active');
			} else {
				$('.oldActive').next().addClass('active');
			}

			$('.oldActive').removeClass('oldActive');
			$('.slider').fadeOut(speed);
			$('.active').fadeIn(speed);
		}, autoswitch_speed);
	}

}); 