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
	})


	// FOLIO SELECTION
	$('#filter-all').on('click', function() {
		// $('.item').removeClass('hide');
	});

	$('#filter-design').on('click', function() {
		// $('.item').removeClass('hide');
		// $('.item').not('.tag-design').addClass('hide');
		GRID.update('tag-design');
		console.log('');
	});

	$('#filter-robo').on('click', function() {
		// $('.item').removeClass('hide');
		// $('.item').not('.tag-robo').addClass('hide');
		GRID.update('tag-robo');
		console.log('');		
	});

	$('#filter-software').on('click', function() {
		// $('.item').removeClass('hide');
		// $('.item').not('.tag-software').addClass('hide');
		GRID.update('tag-software');
		console.log('');
	});


	// Call onLoad behavior of GRID.
	GRID.onLoad('#grid-container');

	$(window).resize( function() {
		GRID.onResize();
	})


})