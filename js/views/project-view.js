var app = app || {};

(function($) {
    'use strict';

    app.ProjectView = Backbone.View.extend({
        tagName: 'article',
        className: 'col-xs-4',
        template: _.template($('#project-template').html()),

        render: function() {
            this.$el.html(this.template(this.model.attributes));

            return this;
        },
    });

})(jQuery);

