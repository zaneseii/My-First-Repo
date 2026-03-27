$(document).ready(function () {
	$('section').on('click', '.candy', function () {
		const $candy = $(this);

		if ($candy.is(':animated') || $candy.css('display') === 'none') {
			return;
		}

		$candy.fadeOut(180);
	});

	$('#reset-btn').on('click', function () {
		$('.candy').stop(true, true).fadeIn(0);
	});
});
