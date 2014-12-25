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
	},


	/* Adjust grid dimensions to fit window. */
	onResize: function() {
		GRID.width = $(GRID.elementId).width();
		GRID.height = $(GRID.elementId).height();
		GRID.update();
	},


	/* Upon filter selection, update list of visible tiles. */
	update: function() {
		GRID.render();
	},


	/* Render the grid. */
	render: function() {}

}