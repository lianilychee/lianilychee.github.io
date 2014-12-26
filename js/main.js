// $(window).load( function() {
$(document).ready(function() {


	/***** SELECTION *****/

	// NAV BAR SELECTION. 
	// When a section is clicked, hide the other one.
	$('#portfoliolink').on('click', function() {
		$('#about').addClass('hide');
		$('#portfolio').removeClass('hide');
	})

	$('#aboutlink').on('click', function() {
		$('#about').removeClass('hide');
		$('#portfolio').addClass('hide');
		// UTILS.resizeImg()
	})

	// FOLIO SELECTION
	$('#filter-all').on('click', function() {
		$('.item').removeClass('hide')
	});

	$('#filter-design').on('click', function() {
		$('.item').removeClass('hide');
		$('.item').not('.tag-design').addClass('hide');
	});

	$('#filter-robo').on('click', function() {
		$('.item').removeClass('hide');
		$('.item').not('.tag-robo').addClass('hide');
	});

	$('#filter-software').on('click', function() {
		$('.item').removeClass('hide');
		$('.item').not('.tag-software').addClass('hide');
	});


	// Call onLoad behavior of GRID.
	GRID.onLoad('#grid-container');

	$(window).resize( function() {
		GRID.onResize();
	})


})