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
		GRID.render();
	});

	$('#filter-design').on('click', function() {
		GRID.render('tag-design');
	});

	$('#filter-robo').on('click', function() {
		GRID.render('tag-robo');
	});

	$('#filter-software').on('click', function() {
		GRID.render('tag-software');
	});


	// Call onLoad behavior of GRID; renders all content upon load.
	GRID.onLoad('#grid-container');

	$(window).resize( function() {
		GRID.onResize();
	})


})