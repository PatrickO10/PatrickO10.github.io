var app = app || {};

(function($) {
    'use strict';

    app.ContactListView = Backbone.View.extend({
        el: '.contact-ul',

        initialize: function(contacts) {
            this.collection = new app.ContactList(contacts);
            this.render();
        },

        // render list by rendering each contact in its collection
        render: function() {
            this.collection.each(function(item) {
                this.renderContact(item);
            }, this);
        },

        // render a project by creating a ContactView and appending the
        // element it renders to the list' element
        renderContact: function(item, contactElement) {
            var contactView = new app.ContactView({
                model: item
            });
            this.$el.append(contactView.render().el);
        },
    });

})(jQuery);
