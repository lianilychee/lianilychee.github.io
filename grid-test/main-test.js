$(window).load( function() {

	$('#filter-all').on('click', function() {
		$('.item-container').removeClass('inactive')
	})

	// on items that don't have the software tag, add the class inactive
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