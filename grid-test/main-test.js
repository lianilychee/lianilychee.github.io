$(window).load( function() {

	// GRID FILTERING

	$('#filter-all').on('click', function() {
		$('.item-container').removeClass('inactive')
	})

	$('#filter-design').on('click', function() {
		$('.item-container').removeClass('inactive')
		$('.item-container').not('.tag-design').addClass('inactive')
	})

	$('#filter-robo').on('click', function() {
		$('.item-container').removeClass('inactive')
		$('.item-container').not('.tag-software').addClass('inactive')
	})

	$('#filter-software').on('click', function() {
		$('.item-container').removeClass('inactive')
		$('.item-container').not('.tag-software').addClass('inactive')
	})




})