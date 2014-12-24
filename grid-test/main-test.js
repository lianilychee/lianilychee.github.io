$(window).load( function() {

	// When clicking on Software filter, in nav, hide About and show Portfolio.
	$('#filter-software').on('click', function() {
		// on items that don't have the software tag, add the class inactive
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