$(window).load( function() {

	/***** NAV SELECTION *****/

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


	/***** FOLIO SELECTION *****/

	$('#filter-all').on('click', function() {
		$('.item').removeClass('hide')
	});

	$('#filter-design').on('click', function() {
		$('.item').removeClass('hide')
		$('.item').not('.tag-design').addClass('hide')
	});

	$('#filter-robo').on('click', function() {
		$('.item').removeClass('hide')
		$('.item').not('.tag-software').addClass('hide')
	});

	$('#filter-software').on('click', function() {
		$('.item').removeClass('hide')
		$('.item').not('.tag-software').addClass('hide')
	});


})