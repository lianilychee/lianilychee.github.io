$(document).ready(function() {

	console.log('main.js loaded');

	// When clicking on "Portfolio" in nav, hide About and show Portfolio.
	$('#portfoliolink').on('click', function() {
		console.log('clicked portfolio!');
		$('#about').addClass('hide');
		$('#portfolio').removeClass('hide');
	})

	// When clicking on "About" in nav, hide Portfolio and show About.
	$('#aboutlink').on('click', function() {
		console.log	('clicked about!');
		$('#about').removeClass('hide');
		$('#portfolio').addClass('hide');
	})



})