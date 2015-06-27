var app = app || {};

(function() {
    'use strict';

    app.Contact = Backbone.Model.extend({

        defaults: {
            url: '',
            ion: ''
        },

        dump: function() {
            console.log(JSON.stringify(this.toJSON()));
        }
    });

})();