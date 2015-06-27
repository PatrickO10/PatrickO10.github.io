var app = app || {};

(function($) {
    'use strict';

    app.ContactView = Backbone.View.extend({
        tagName: 'li',
        className: 'menu-item',
        template: _.template($('#contact-template').html()),

        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });

})(jQuery);
