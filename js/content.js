var CONTENT = {

	filtered: [],

	master: [	item1 = [	'image',
							'Unclassified',
							'blurb',
							[]	],

				item2 = [	'image',
							'Design',
							'blurb',
							['tag-design']	],

				item3 = [	'image',
							'Software, Robo',
							'blurb',
							['tag-software', 'tag-robo']	],

				item4 = [	'image',
							'Design, Robo',
							'blurb',
							['tag-design', 'tag-robo']	],	

				item5 = [	'image',
							'Robo',
							'blurb',
							['tag-robo']	],

				item6 = [	'image',
							'Unclassified',
							'blurb',
							[]	]
	],


	/* Upon filter selection, updates list of content to be displayed. */
	downselect: function(tag) {

		CONTENT.filtered = []; // Clear the filtered list

		for (var i = 0; i < CONTENT.master.length; i++) {
			if ( CONTENT.master[i][3].indexOf(tag) !== -1 ) {
				CONTENT.filtered.push( CONTENT.master[i] );
			}
		}
	}


}