$(window).load( function() {


	// When clicking on "Portfolio" in nav, hide About and show Portfolio.
	$('#portfoliolink').on('click', function() {
		$('#about').addClass('hide');
		$('#portfolio').removeClass('hide');
	})

	// When clicking on "About" in nav, hide Portfolio and show About.
	$('#aboutlink').on('click', function() {
		$('#about').removeClass('hide');
		$('#portfolio').addClass('hide');
		UTILS.resizeImg()
	})

	// UTILS.resizeImg()


})