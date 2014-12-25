var GRID = {

	/* Initialization. */
	tiles: [],


	/* Grab HTML element dimensions. */
	onLoad: function(id) {
		GRID.elementId = id;
		GRID.width = $(GRID.elementId).width();
		GRID.height = $(GRID.elementId).height();

		console.log(GRID.width, GRID.height);
	},


	/* Adjust grid dimensions to fit window. */
	onResize: function() {},


	/* Upon filter selection, update list of visible tiles. */
	update: function() {},


	/* Render the grid. */
	renderGrid: function() {}

}