var app = app || {};

(function() {
    'use strict';

    app.Project = Backbone.Model.extend({

        defaults: {
            title: '',
            image: '',
            url: ''
        },

        dump: function() {
            console.log(JSON.stringify(this.toJSON()));
        }
    });

})();
