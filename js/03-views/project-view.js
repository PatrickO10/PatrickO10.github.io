var app = app || {};

(function($) {
    'use strict';

    app.ProjectView = Backbone.View.extend({
        tagName: 'article',
        className: 'card col-sm-6 col-md-4 text-center',
        template: _.template($('#project-template').html()),

        render: function() {
            this.$el.html(this.template(this.model.attributes));

            return this;
        }
    });

})(jQuery);
