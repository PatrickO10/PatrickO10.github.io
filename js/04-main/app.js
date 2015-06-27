var app = app || {};

$(function() {
    'use strict';

    var frontEndProjects = [{
        title: 'Neighborhood Map',
        image: 'dist/images/nhm.png',
        demo: 'https://patricko10.github.io/neighborhood-map',
        source: 'https://github.com/PatrickO10/neighborhood-map'
    }, {
        title: 'Feed Reader Testing',
        image: 'dist/images/frtest.png',
        demo: 'http://patricko10.github.io/frontend-nanodegree-feedreader/',
        source: 'https://github.com/PatrickO10/frontend-nanodegree-feedreader'
    }, {
        title: 'Frogger Arcade',
        image: 'dist/images/frogger.png',
        demo: 'https://patricko10.github.io/froggerArcade',
        source: 'https://github.com/PatrickO10/froggerArcade'
    }, {
        title: 'Website Optimization',
        image: 'dist/images/pizza.png',
        demo: 'http://patricko10.github.io/udportfolio/',
        source: 'https://github.com/PatrickO10/udportfolio'
    }, {
        title: 'Interactive Resume',
        image: 'dist/images/irimg.png',
        demo: 'https://patricko10.github.io/interactive-resume',
        source: 'https://github.com/PatrickO10/interactive-resume'
    }, {
        title: 'Portfolio',
        image: 'dist/images/mockport.png',
        demo: 'http://patricko10.github.io/',
        source: 'https://github.com/PatrickO10/PatrickO10.github.io'
    }];

    var fullStackProjects = [{
        title: 'Movie Trailers',
        image: 'dist/images/movie_trail.png',
        demo: 'https://patricko10.github.io/movie_trailers',
        source: 'https://github.com/PatrickO10/movie_trailers'
    }, {
        title: 'Tournament Planner',
        image: 'dist/images/chess.png',
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
