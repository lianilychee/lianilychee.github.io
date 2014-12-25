var UTILS = {

	/* // HANDLE IMAGE RESIZING
	resizeImg: function() {

		// Grab div img-container dimensions
		divWidth = $('.img-container').width();
		divHeight = $('.img-container').height();
		console.log('Div dimensions: ' + divWidth, divHeight);

		// Grab image dimensions
		imgWidth = $('img').width();
		imgHeight = $('img').height();
		console.log('Img dimensions: ' + imgWidth, imgHeight);

		var ratio = imgHeight / imgWidth;

		if (imgWidth >= divWidth && ratio <= 1) {
			imgWidth = divWidth;
			imgHeight = divHeight * ratio;

		}

		// Compute differences

		if (imgWidth > divWidth) {
			console.log('picture is larger than div');
		}

		// Cut margins
		img.style.clip='rect(10px, auto, auto, 10px)';
		// Remove margins
		img.style.top='-10px';
		img.style.left='-10px';

		// img.style.left = '-' + x + 'px';
		// img.style.top = '-' + y + 'px';

		// if (width !== undefined) {
		// 	img.parentNode.style.width = width + 'px';
		// 	img.parentNode.style.height = height + 'px';
		// }

	},

	// HANDLE PAGE RESIZING
	resizeWindow: function() {

		// Grab screen dimensions
		screenWidth = $(document).width();
		screenHeight = $(document).height();
		console.log('Screen dimensions: ' + screenWidth, screenHeight);

	}

	// HANDLE POP-UPS */

}