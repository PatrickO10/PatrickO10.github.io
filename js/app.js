var app = app || {};

$(function() {
    'use strict';

    var projects = [{
        title: 'Neighborhood Map',
        image: 'http://placekitten.com/g/120/120',
        description: 'This is the police speaking.  This club is closed. FOREVER!'
    }, {
        title: 'Feed Reader Testing',
        image: 'http://placekitten.com/g/120/120',
        description: 'This is the police speaking.  This club is closed. FOREVER!'
    }, {
        title: 'Frogger Arcade',
        image: 'http://placekitten.com/g/120/120',
        description: 'This is the police speaking.  This club is closed. FOREVER!'
    }, {
        title: 'Website Optimization',
        image: 'http://placekitten.com/g/120/120',
        description: 'This is the police speaking.  This club is closed. FOREVER!'
    }, {
        title: 'Interactive Resume',
        image: 'http://placekitten.com/g/120/120',
        description: 'This is the police speaking.  This club is closed. FOREVER!'
    }, {
        title: 'Mock Portfolio',
        image: 'http://placekitten.com/g/120/120',
        description: 'This is the police speaking.  This club is closed. FOREVER!'
    }];

    new app.ListView(projects);
});
