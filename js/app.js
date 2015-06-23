var app = app || {};

$(function() {
    'use strict';

    var frontEndProjects = [{
        title: 'Neighborhood Map',
        image: 'images/nhm.png',
        url: 'https://patricko10.github.io/neighborhood-map'
    }, {
        title: 'Feed Reader Testing',
        image: 'images/frtest.png',
        url: 'http://patricko10.github.io/frontend-nanodegree-feedreader/'
    }, {
        title: 'Frogger Arcade',
        image: 'images/frogger.png',
        url: 'https://patricko10.github.io/froggerArcade'
    }, {
        title: 'Website Optimization',
        image: 'images/pizza.png',
        url: 'http://patricko10.github.io/udportfolio/'
    }, {
        title: 'Interactive Resume',
        image: 'images/irimg.png',
        url: 'https://patricko10.github.io/interactive-resume'
    }, {
        title: 'Mock Portfolio',
        image: 'images/mockport.png',
        url: 'http://patricko10.github.io/pat_orth_portfolio/'
    }];

    var fullStackProjects = [{
        title: 'Movie Trailers',
        image: 'images/movie_trail.png',
        url: 'https://patricko10.github.io/movie_trailers'
    }, {
        title: 'Tournament Planner',
        image: 'images/chess.jpg',
        url: 'https://github.com/PatrickO10/tournament_planner'
    }, {
        title: 'Item Catalog',
        image: 'images/construction.jpg',
        url: 'https://patricko10.github.io'
    }, {
        title: 'Conference Organization App',
        image: 'images/construction.jpg',
        url: 'https://patricko10.github.io'
    }, {
        title: 'Linux Server Configuration',
        image: 'images/construction.jpg',
        url: 'https://patricko10.github.io'
    }];

    var myContacts = [{
        url: 'mailto:patrickorth10@gmail.com',
        ion: 'email'
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
    //app.fullStackListView = new app.FSListView(fullStackProjects);
    app.contactLV = new app.ContactListView(myContacts);
});
