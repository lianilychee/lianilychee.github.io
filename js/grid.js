var GRID = {

	/* Initialization. */
	tiles: [1,1,1,1],


	/* Grab HTML element dimensions. */
	onLoad: function(id) {

		GRID.elementId = id;

		$(window).load( function() {
			GRID.width = $(GRID.elementId).width();
			GRID.height = $(GRID.elementId).height();
			
			GRID.colCount = Math.floor(GRID.width/400);

			if (GRID.tiles.length % GRID.colCount == 0) { GRID.rowCount = GRID.tiles.length / GRID.colCount; }
			else { GRID.rowCount = Math.floor(GRID.tiles.length/GRID.colCount) + 1; };

			GRID.render();
		});
	},


	/* Adjust grid cell dimensions to fit window. */
	onResize: function() {
		GRID.width = $(GRID.elementId).width();
		GRID.height = $(GRID.elementId).height();

		GRID.colCount = Math.floor(GRID.width/400);

		if (GRID.tiles.length % GRID.colCount == 0) { GRID.rowCount = GRID.tiles.length / GRID.colCount; }
		else { GRID.rowCount = Math.floor(GRID.tiles.length/GRID.colCount) + 1; };

		GRID.update();
	},


	/* Upon filter selection, update list of visible tiles. */
	update: function() {

		// remove all tiles here

		GRID.render();  // redraw tiles here
	},


	/* Create an info tile. */
	createTile: function() {

		item = '<div class="item ' + String(CONTENT[1][3]) + '">';

		itemImage = '<div class="item-image"></div>';
		itemTitle = '<div class="item-title">' + CONTENT[1][1] + '</div>';
		itemBlurb = '<div class="item-blurb">' + CONTENT[1][2] + '</div>';

		item += itemImage + itemTitle + itemBlurb + '</div>'

		return item;

		// $('#test-tile-div').html(item);
	},


	/* Render the grid. */
	render: function() {

		testTable = '<table>';

		for (var i = 0; i < GRID.rowCount; i++) {

			testTable += '<tr>'; // start row

			for (var j = 0; j < GRID.colCount; j++) { testTable += '<td>' + GRID.createTile() + '</td>'; };

			testTable += '</tr>'; // end row
		};

		testTable += '</table>';

		$('#test-table-div').html(testTable);
	}

}