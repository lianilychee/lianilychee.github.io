$(window).load( function() {

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

	// When clicking on "About" in nav, hide Portfolio and show About.
	// $('#aboutlink').on('click', function() {
	// 	$('#about').removeClass('hide');
	// 	$('#portfolio').addClass('hide');
	// 	UTILS.resizeImg()
	// })

	// UTILS.resizeImg()


})