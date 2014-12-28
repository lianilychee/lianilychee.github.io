// $(window).load( function() {
$(document).ready(function() {

	/***** SELECTION *****/

	tag = null;

	$('#filter-all').on('click', function() {
		GRID.render();
	});

	$('#filter-design').on('click', function() {
		GRID.render('tag-design');
		tag = 'tag-design';
	});

	$('#filter-robo').on('click', function() {
		GRID.render('tag-robo');
		tag = 'tag-robo';
	});

	$('#filter-software').on('click', function() {
		GRID.render('tag-software');
		tag = 'tag-software';
	});


	// Call onLoad behavior of GRID; renders all content upon load.
	GRID.onLoad('#grid-container');

	$(window).resize( function() {
		GRID.onResize(tag);
	})


})