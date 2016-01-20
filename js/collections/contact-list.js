var app = app || {};

(function() {
    'use strict';

    app.ContactList = Backbone.Collection.extend({
        model: app.Contact
    });

})();