$(window).load( function() {

	// GRID FILTERING

	$('#filter-all').on('click', function() {
		$('.item-container').removeClass('inactive')
	})

	$('#filter-robo').on('click', function() {
		$('.item-container').not(".tag-software").addClass('inactive')
	})

	$('#filter-design').on('click', function() {
		$('.item-container').not(".tag-design").addClass('inactive')
	})

	$('#filter-software').on('click', function() {
		$('.item-container').not(".tag-software").addClass('inactive')
	})




})