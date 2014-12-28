// $(window).load( function() {
$(document).ready(function() {

	console.log('TESTING FOR LOOP');

	k = 0;

	for (var i = 0; i < 2; i++) {  // there are two rows
		console.log(i);

		for (var j = 0; j < 3; j++) { // there are three columns in each row
			k++;
			console.log('  ' + j + ' | k: ' + k);
		};

	};












	/***** SELECTION *****/

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