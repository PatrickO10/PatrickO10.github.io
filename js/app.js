var app = app || {};

$(function() {
    'use strict';

    var frontEndProjects = [{
        title: 'Neighborhood Map',
        image: 'http://placehold.it/300x200',
        url: 'https://patricko10.github.io/neighborhood-map'
    }, {
        title: 'Feed Reader Testing',
        image: 'http://placehold.it/300x200',
        url: 'https://patricko10.github.io'
    }, {
        title: 'Frogger Arcade',
        image: 'http://placehold.it/300x200',
        url: 'https://patricko10.github.io/froggerArcade'
    }, {
        title: 'Website Optimization',
        image: 'http://placehold.it/300x200',
        url: 'https://patricko10.github.io'
    }, {
        title: 'Interactive Resume',
        image: 'http://placehold.it/300x200',
        url: 'https://patricko10.github.io/interactive-resume'
    }, {
        title: 'Mock Portfolio',
        image: 'http://placehold.it/300x200',
        url: 'https://patricko10.github.io'
    }];

    new app.ListView(frontEndProjects);
});
