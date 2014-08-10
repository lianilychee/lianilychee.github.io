$(document).ready( function() {

	console.log("Friendly reminder: css .hide is turned OFF");

	// Display foio when icon is clicked.
	$("#folio-click").click( function() {
		$("#folio-container").removeClass("hide");
	})

	/** RESIZING THUMBNAIL IMAGES **/
	UTILS.thumbnail();

})