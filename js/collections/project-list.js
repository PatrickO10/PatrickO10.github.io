var app = app || {};

(function() {
    'use strict';

    app.ProjectList = Backbone.Collection.extend({
        model: app.Project
    });

})();
