var GRID = {

	// SETUP
	size: "size21", // Size of each box
	background: "rgb(211, 84, 0)", // Background color

	// RENDER GRID
	render: function(tiles) {
		for (var i=0; i<tiles; i++) {
			console.log(i);
		}


		$("#grid-container").html(); // Put into HTML
	},


		// var html='', size='', color='', limitItem=5;
		
		// for (var i = 0; i < limitItem; i++) {
		// 	size = sizes[sizes.length * Math.random() << 0];
		// 	color = "rgb(211, 84, 0)";
		// 	html += temp.replace(/\{size\}/g, size).replace("{color}", color);
		// }











	// COPY-PASTA UNCOMMENTED SCRIPTS
	filtering: function() {
		var wall = new freewall('#grid-container');
		
		// Reset the grid layout based on filtering
		wall.reset({
			selector: '.brick',
			animate: true,
			cellW: 160,
			cellH: 160,
			fixSize: 0,
			onResize: function() { wall.refresh(); }
		});

		// If filter is clicked, filter and re-render
		$('.filter-label').click(function() {
			$('.filter-label').removeClass('active');
			var filter = $(this).addClass('active').data('filter');
			if (filter) { wall.filter(filter); }
			else { wall.unfilter(); }
		});

		wall.fitWidth();
	}

}