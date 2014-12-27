var GRID = {

	/* Initialization. */
	content: CONTENT.master,


	/* Grab HTML element dimensions. */
	onLoad: function(id) {

		GRID.elementId = id;

		$(window).load( function() {
			GRID.width = $(GRID.elementId).width();
			GRID.height = $(GRID.elementId).height();
			
			// GRID.colCount = Math.floor(GRID.width/400);
			GRID.colCount = Math.floor(GRID.width/200);

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

		GRID.update();
	},


	/* Upon filter selection, update list of visible tiles. */
	update: function(tag) {

		console.log('GRID.update(' +tag+ ') firing');
		// remove all tiles here

		GRID.filtered = [];  // Make sure we're starting w a clean slate.

		for (var i = 0; i < GRID.content.length; i++) {
			if ( CONTENT.master[i][3].indexOf(tag) !== -1 ) {
				GRID.filtered.push( GRID.content[i] );
			}
		}

		// GRID.render(tag);  // redraw tiles here







				// downselect: function(tag) {

				// 	CONTENT.filtered = []; // Clear the filtered list

				// 	for (var i = 0; i < CONTENT.master.length; i++) {
				// 		if ( CONTENT.master[i][3].indexOf(tag) !== -1 ) {
				// 			CONTENT.filtered.push( CONTENT.master[i] );
				// 		}
				// 	}

				// 	return CONTENT.filtered;
				// }







	},


	/* Create an info tile. */
	createTile: function(k, tag) {

		// filteredContent = CONTENT.downselect(tag);
		// console.log(filteredContent);

		// item = '<div class="item ' + String(filteredContent[k][3]) + '">';

		// itemImage = '<div class="item-image"></div>';
		// itemTitle = '<div class="item-title">' + filteredContent[k][1] + '</div>';
		// itemBlurb = '<div class="item-blurb">' + filteredContent[k][2] + '</div>';

		item = '<div class="item ' + String(GRID.content[k][3]) + '">';

		itemImage = '<div class="item-image"></div>';
		itemTitle = '<div class="item-title">' + GRID.content[k][1] + '</div>';
		itemBlurb = '<div class="item-blurb">' + GRID.content[k][2] + '</div>';

		item += itemImage + itemTitle + itemBlurb + '</div>'

		return item;
	},


	/* Render the grid. */
	render: function(tag) {

		table = '<table>';

		for (var i = 0; i < GRID.rowCount; i++) {
			table += '<tr>'; // start row

			for (var j = 0; j < GRID.colCount; j++) {
				k = i+j;
				// console.log(k);
				table += '<td>' + GRID.createTile(k, tag) + '</td>'; 
			};

			table += '</tr>'; // end row
		};

		table += '</table>';

		$('#grid-container').html(table);

	}

}