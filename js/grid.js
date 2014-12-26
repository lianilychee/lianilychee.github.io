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

			if (GRID.tiles.length % GRID.colCount == 0) {
				GRID.rowCount = GRID.tiles.length / GRID.colCount;
			}
			else {
				GRID.rowCount = Math.floor(GRID.tiles.length/GRID.colCount) + 1;
			}

			console.log('cols: ' + GRID.colCount + ', rows: ' + GRID.rowCount);

			console.log('render() being called from onLoad');
			GRID.render();
		});

	},


	/* Adjust grid cell dimensions to fit window. */
	onResize: function() {
		GRID.width = $(GRID.elementId).width();
		GRID.height = $(GRID.elementId).height();

		GRID.colCount = Math.floor(GRID.width/400);
		GRID.rowCount = Math.floor(GRID.tiles.length/GRID.colCount) + 1; // need to mod this to account for even divisibility

		GRID.update();
	},


	/* Upon filter selection, update list of visible tiles. */
	update: function() {

		// remove all tiles here

		GRID.render();  // redraw tiles here
	},


	/* Render the grid. */
	render: function() {
		console.log('firing render()');

		poop = GRID.rowCount;

		// FUTZING AROUND WITH CREATING A TABLE W/ JQUERY

		data = [ [1,2,3], [4,5,6], [7,8,9] ];

		testTable = '<table>';

		for (var i = 0; i < GRID.rowCount; i++) {

			testTable += '<tr>'; // start row

			for (var j = 0; j < GRID.colCount; j++) {
				testTable += '<td>' + '0' + '</td>';
			};

			testTable += '</tr>'; // end row
		};

		testTable += '</table>';

		$('#test-table-div').html(testTable);


	}

}