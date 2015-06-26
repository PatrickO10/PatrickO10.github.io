var app = app || {};

$(function() {
    'use strict';

    var frontEndProjects = [{
        title: 'Neighborhood Map',
        image: 'images/nhm.png',
        demo: 'https://patricko10.github.io/neighborhood-map',
        source: 'https://github.com/PatrickO10/neighborhood-map'
    }, {
        title: 'Feed Reader Testing',
        image: 'images/frtest.png',
        demo: 'http://patricko10.github.io/frontend-nanodegree-feedreader/',
        source: 'https://github.com/PatrickO10/frontend-nanodegree-feedreader'
    }, {
        title: 'Frogger Arcade',
        image: 'images/frogger.png',
        demo: 'https://patricko10.github.io/froggerArcade',
        source: 'https://github.com/PatrickO10/froggerArcade'
    }, {
        title: 'Website Optimization',
        image: 'images/pizza.png',
        demo: 'http://patricko10.github.io/udportfolio/',
        source: 'https://github.com/PatrickO10/udportfolio'
    }, {
        title: 'Interactive Resume',
        image: 'images/irimg.png',
        demo: 'https://patricko10.github.io/interactive-resume',
        source: 'https://github.com/PatrickO10/interactive-resume'
    }, {
        title: 'Mock Portfolio',
        image: 'images/mockport.png',
        demo: 'http://patricko10.github.io/pat_orth_portfolio/',
        source: 'https://github.com/PatrickO10/pat_orth_portfolio'
    }];

    var fullStackProjects = [{
        title: 'Movie Trailers',
        image: 'images/movie_trail.png',
        demo: 'https://patricko10.github.io/movie_trailers',
        source: 'https://github.com/PatrickO10/movie_trailers'
    }, {
        title: 'Tournament Planner',
        image: 'images/chess.jpg',
        source: 'https://github.com/PatrickO10/tournament_planner'
    }, {
        title: 'Item Catalog',
        image: 'images/construction.jpg'
    }, {
        title: 'Conference Organization App',
        image: 'images/construction.jpg'
    }, {
        title: 'Linux Server Configuration',
        image: 'images/construction.jpg'
    }];

    var myContacts = [{
        url: 'mailto:patrickorth10@gmail.com',
        ion: 'email'
    }, {
        url: 'google phone #',
        ion: 'social-phone'
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
