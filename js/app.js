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
        image: 'http://placehold.it/300x200',
        url: 'https://patricko10.github.io'
    }, {
        title: 'Movie Trailers',
        image: 'http://placehold.it/300x200',
        url: 'https://patricko10.github.io'
    }, {
        title: 'Movie Trailers',
        image: 'http://placehold.it/300x200',
        url: 'https://patricko10.github.io'
    }, {
        title: 'Movie Trailers',
        image: 'http://placehold.it/300x200',
        url: 'https://patricko10.github.io'
    }, {
        title: 'Movie Trailers',
        image: 'http://placehold.it/300x200',
        url: 'https://patricko10.github.io'
    }];

    app.ListView = new app.ListView(frontEndProjects, fullStackProjects);
    //app.fullStackListView = new app.FSListView(fullStackProjects);
});
