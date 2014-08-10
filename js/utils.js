var UTILS = {

	/** RESIZING THUMBNAIL IMAGES **/
	thumbnail: function() {

		console.log("UTILS.thumbnail ON");

		var maxWidth = 325;
		var maxHeight = 200;
		var ratio = 0;

		var width = $(".thumbnail-picture").width();
		var height = $(".thumbnail-picture").height();

		console.log("orig dimensions  width: " +width+ "  height: " +height);

		var ratio = maxWidth / width;
	
		$(".thumbnail-picture").css("width", maxWidth);
		$(".thumbnail-picture").css("height", height * ratio);


	/*	if (width > maxWidth) {
			console.log("width > maxWidth");
			ratio = maxWidth / width;
			$(".thumbnail-picture").css("width", maxWidth);
			$(".thumbnail-picture").css("height", height * ratio);
			height = height * ratio;
		} */

	/*	var width = $(".thumbnail-picture").width();
		var height = $(".thumbnail-picture").height();


		if (height > maxHeight) {
			console.log("height > maxHeight");
			ratio = maxHeight / height;
			$(".thumbnail-picture").css("height", maxHeight);
			$(".thumbnail-picture").css("width", width * ratio);
			width = width * ratio;
			
		} */

	}

}