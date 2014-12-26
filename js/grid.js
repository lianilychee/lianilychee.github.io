var GRID = {

	/* Initialization. */
	tiles: [],


	/* Grab HTML element dimensions. */
	onLoad: function(id) {

		GRID.elementId = id;

		$(window).load( function() {
			GRID.width = $(GRID.elementId).width();
			GRID.height = $(GRID.elementId).height();
			// console.log(GRID.width, GRID.height);
		});

		GRID.render();
	},


	/* Adjust grid cell dimensions to fit window. */
	onResize: function() {
		GRID.width = $(GRID.elementId).width();
		GRID.height = $(GRID.elementId).height();

		GRID.rowCount = Math.floor(GRID.height/250);
		GRID.colCount = Math.floor(GRID.width/400);
		// console.log(GRID.rowCount, GRID.colCount);

		GRID.update();
	},


	/* Upon filter selection, update list of visible tiles. */
	update: function() {

		// remove all tiles here

		GRID.render();  // redraw tiles here
	},


	/* Render the grid. */
	render: function() {

		// FUTZING AROUND WITH CREATING A TABLE W/ JQUERY

		data = [ [1,2,3], [4,5,6], [7,8,9] ];

		testTable = '<table>'

		for (var i = 0; i < data.length; i++) {
			testTable += '<tr>'; // add a rows
			for (var j = 0, rowLen = data[i].length; j < rowLen; j++) {
				testTable += '<td>' + data[i][j] + '</td>';
			}
			testTable += '</tr>';
		}

		testTable += '</table>';

		$('#test-table-div').html(testTable);


	}

}