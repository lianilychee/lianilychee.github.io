// $(window).load( function() {
$(document).ready(function() {


	// FUTZING AROUND WITH CREATING A TABLE W/ JQUERY

	data = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [7, 8, 9 ] ];
	// testTable = $(document.createElement('table'));
	testTable = '<table>'


	for (var i = 0, len = data.length; i < len; i++) {
		testTable += '<tr>';
		for (var j = 0, rowLen = data[i].length; j < rowLen; j++) {
			testTable += '<td>' + data[i][j] + '</td>';
		}
		testTable += '</tr>';
	}

	testTable += '</table>';

	$('#test-table-div').html(testTable);

























	/***** SELECTION *****/

	// NAV BAR SELECTION. 
	// When a section is clicked, hide the other one.
	$('#portfoliolink').on('click', function() {
		$('#about').addClass('hide');
		$('#portfolio').removeClass('hide');
	})

	$('#aboutlink').on('click', function() {
		$('#about').removeClass('hide');
		$('#portfolio').addClass('hide');
		// UTILS.resizeImg()
	})

	// FOLIO SELECTION
	$('#filter-all').on('click', function() {
		$('.item').removeClass('hide')
	});

	$('#filter-design').on('click', function() {
		$('.item').removeClass('hide');
		$('.item').not('.tag-design').addClass('hide');
	});

	$('#filter-robo').on('click', function() {
		$('.item').removeClass('hide');
		$('.item').not('.tag-robo').addClass('hide');
	});

	$('#filter-software').on('click', function() {
		$('.item').removeClass('hide');
		$('.item').not('.tag-software').addClass('hide');
	});


	// Call onLoad behavior of GRID.
	GRID.onLoad('#grid-container');

	$(window).resize( function() {
		GRID.onResize();
	})


})