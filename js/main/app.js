var app = app || {};

$(function() {
	'use strict';

	var frontEndProjects = [{
		title: 'Meet-Up Event Planner',
		image: 'dist/images/meetuppic.png',
		description: 'Meet-Up Event Planner',
		demo: 'https://patricko10.github.io/meetUp',
		source: 'https://github.com/PatrickO10/meetUp'
	}, {
		title: 'Neighborhood Map',
		image: 'dist/images/nhm.png',
		description: 'Neighborhood Map',
		demo: 'http://patricko10.github.io/neighborhood-map',
		source: 'https://github.com/PatrickO10/neighborhood-map'
	}, {
		title: 'Feed Reader Testing',
		image: 'dist/images/frtest.png',
		description: 'I enjoyed writing unit suites, testing one unit at a time.',
		demo: 'http://patricko10.github.io/frontend-nanodegree-feedreader/',
		source: 'https://github.com/PatrickO10/frontend-nanodegree-feedreader'
	}, {
		title: 'Frogger Arcade',
		image: 'dist/images/frogger.png',
		demo: 'https://patricko10.github.io/froggerArcade',
		description: 'I enjoyed using the psuedoclassical class pattern. I especially liked my guardian subclass, which helps the hero score more points!',
		source: 'https://github.com/PatrickO10/froggerArcade'
	}, {
		title: 'Website Optimization',
		image: 'dist/images/pizza.png',
		description: 'I enjoyed optimizing the pizza frame rate to 60 fps.  I removed slow code from the JavaScript file to unblock the rendering because if the code is still running in the call stack the page won\'t render.',
		demo: 'http://patricko10.github.io/udportfolio/',
		source: 'https://github.com/PatrickO10/udportfolio'
	}, {
		title: 'Interactive Resume',
		image: 'dist/images/irimg.png',
		description: 'I enjoyed playing around with Google Map. What made my project unique was when you click on an icon the background changes to a street view image and then the pano appears to the right of the map. I also added a recursive function to that process.Sometimes there wouldn\'t be a street view for the pano if the radius wasn\'t large enough, so I made a function call itself increasing the search area until it found one.',
		demo: 'http://patricko10.github.io/interactive-resume',
		source: 'https://github.com/PatrickO10/interactive-resume'
	}, {
		title: 'Portfolio',
		image: 'dist/images/port-pic.png',
		description: 'I enjoyed building a responsive webpage, using Backbone.js, bootstrap, underscore, jQuery. One of my favorite parts was adding two sets of projects.',
		demo: 'http://patricko10.github.io/',
		source: 'https://github.com/PatrickO10/PatrickO10.github.io'
	}];

	var fullStackProjects = [{
		title: 'Movie Trailers',
		image: 'dist/images/movie_trail.png',
		description: 'I enjoyed picking several different movie trailers to add.',
		demo: 'http://patricko10.github.io/movie_trailers',
		source: 'https://github.com/PatrickO10/movie_trailers'
	}, {
		title: 'Tournament Planner',
		image: 'dist/images/chess.png',
		description: 'I enjoyed creating a database for the first time using SQL. What was unique about my project is I created a helper method to manipulate the database in Python.',
		source: 'https://github.com/PatrickO10/tournament_planner'
	}, {
		title: 'Item Catalog',
		image: 'dist/images/construction.png'
	}, {
		title: 'Conference Organization App',
		image: 'dist/images/construction.png'
	}, {
		title: 'Linux Server Configuration',
		image: 'dist/images/construction.png'
	}];

	var myContacts = [{
		url: 'mailto:patrickorth10@gmail.com',
		ion: 'email'
	}, {
		url: 'tel: +1-612-424-9883',
		ion: 'ios-telephone'
	}, {
		url: 'https://www.linkedin.com/pub/patrick-orth/97/91a/221',
		ion: 'social-linkedin'
	}, {
		url: 'https://github.com/PatrickO10',
		ion: 'social-github'
	}, {
		url: 'https://twitter.com/patrick_orth',
		ion: 'social-twitter'
	}];

	app.listView = new app.ListView(frontEndProjects, fullStackProjects);
	app.contactLV = new app.ContactListView(myContacts);
});
