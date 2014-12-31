$(document).ready(function() {

	/***** SELECTION *****/
	tag = null;

	$('#filter-all').on('click', function() {
		GRID.render();
		tag = null;
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


	// Call GRID.onLoad() to render all content upon page load.
	GRID.onLoad('#grid-container');


	/***** POP-UPS *****/
	$(window).load( function() {
		$('.item-image, .item-title, .item-blurb').on('click', function(event) {
			
			console.log($(this));

			// get title -> get data name
		})
	});


	/***** TRIGGER RERENDERING ON RESIZE *****/
	$(window).resize( function() {
		GRID.onResize(tag);
	})




})