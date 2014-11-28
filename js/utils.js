var UTILS = {

	// HANDLE IMAGE RESIZING
	resizeImg: function() {

		// Grab screen dimensions
		screenWidth = $(document).width();
		screenHeight = $(document).height();
		console.log('Screen dimensions: ' + screenWidth, screenHeight);

		// Grab div img-container dimensions
		divWidth = $('.img-container').width();
		divHeight = $('.img-container').height();
		console.log('Div dimensions: ' + divWidth, divHeight);

		// Grab image dimensions
		imgWidth = $('img').width();
		imgHeight = $('img').height();
		console.log(imgWidth, imgHeight);

		// img.style.left = '-' + x + 'px';
		// img.style.top = '-' + y + 'px';

		// if (width !== undefined) {
		// 	img.parentNode.style.width = width + 'px';
		// 	img.parentNode.style.height = height + 'px';
		// }

	}

	// HANDLE PAGE RESIZING


	// HANDLE POP-UPS

}