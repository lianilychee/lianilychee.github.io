var GRID = {

	/* Initialization. */
	content: CONTENT.master,


	/* Grab HTML element dimensions. */
	onLoad: function(id) {

		GRID.elementId = id;

		$(window).load( function() {
			GRID.width = $(GRID.elementId).width();
			GRID.height = $(GRID.elementId).height();
			
			GRID.colCount = Math.floor(GRID.width/400);

			if (GRID.content.length % GRID.colCount == 0) { GRID.rowCount = GRID.content.length / GRID.colCount; }
			else { GRID.rowCount = Math.floor(GRID.content.length/GRID.colCount) + 1; };

			GRID.render();
		});
	},


	/* Adjust grid cell dimensions to fit window. */
	onResize: function() {
		GRID.width = $(GRID.elementId).width();
		GRID.height = $(GRID.elementId).height();

		GRID.colCount = Math.floor(GRID.width/400);

		if (GRID.content.length % GRID.colCount == 0) { GRID.rowCount = GRID.content.length / GRID.colCount; }
		else { GRID.rowCount = Math.floor(GRID.content.length/GRID.colCount) + 1; };

		GRID.render();
	},


	/* Takes in filter selection and updates list of visible tiles. */
	updateInfo: function(tag) {

		GRID.filtered = [];

		if (tag == null) {
			return GRID.content;
		}
		else {
			// console.log('return some other info');
			for (var i = 0; i < GRID.content.length; i++) {
				if ( CONTENT.master[i][3].indexOf(tag) !== -1 ) {
					GRID.filtered.push( GRID.content[i] );
				}
			};
			return GRID.filtered;
		};
	},


	/* Format content in HTML to place into each <td>. */
	createTile: function(info) {

		tiles = [];

		for (var i = 0; i < info.length; i++) {
			item = '<div class="item ' + String(info[i][3]) + '">';

			itemImage = '<div class="item-image"></div>';
			itemTitle = '<div class="item-title">' + info[i][1] + '</div>';
			itemBlurb = '<div class="item-blurb">' + info[i][2] + '</div>';

			item += itemImage + itemTitle + itemBlurb + '</div>';

			tiles.push( item );
		}

		return tiles;
	},


	/* Render the grid. */
	render: function(tag) {

		info = GRID.updateInfo(tag);	// Acquire content to display.
		tiles = GRID.createTile(info);	// Acquire tiles to display.
		k = -1;	// initializing counter

		// Insert content into table.
		table = '<table>';

		for (var i = 0; i < GRID.rowCount; i++) {
			table += '<tr>'; // start row

			for (var j = 0; j < GRID.colCount; j++) {
				k++;
				table += '<td>' + tiles[k] + '</td>';
			};

			table += '</tr>'; // end row
		};

		table += '</table>';

		$('#grid-container').html(table);
	}

}