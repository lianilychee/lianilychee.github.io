$(window).load( function() {

	WIDTH = $(window).width();
	HEIGHT = $(window).height();
	console.log(WIDTH, HEIGHT);

	GRID = $('#grid-container');
	console.log(GRID.width(), GRID.height());

	
	// GRID FILTERING

	$('#filter-all').on('click', function() {
		$('.item-container').removeClass('inactive')
	});

	$('#filter-design').on('click', function() {
		$('.item-container').removeClass('inactive')
		$('.item-container').not('.tag-design').addClass('inactive')
	});

	$('#filter-robo').on('click', function() {
		$('.item-container').removeClass('inactive')
		$('.item-container').not('.tag-software').addClass('inactive')
	});

	$('#filter-software').on('click', function() {
		$('.item-container').removeClass('inactive')
		$('.item-container').not('.tag-software').addClass('inactive')
	});




})