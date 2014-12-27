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


	/* Create an info tile. */
	createTile: function(k, tag) {

		item = '<div class="item ' + String(GRID.content[k][3]) + '">';

		itemImage = '<div class="item-image"></div>';
		itemTitle = '<div class="item-title">' + GRID.content[k][1] + '</div>';
		itemBlurb = '<div class="item-blurb">' + GRID.content[k][2] + '</div>';

		item += itemImage + itemTitle + itemBlurb + '</div>'

		return item;
	},


	/* Render the grid. */
	render: function(tag) {

		console.log( GRID.updateInfo(tag) );

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