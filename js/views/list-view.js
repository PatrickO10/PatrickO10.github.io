var app = app || {};

(function($) {
    'use strict';

    app.ListView = Backbone.View.extend({
        el: '.projects',

        initialize: function(initialProjects) {
            this.collection = new app.ProjectList(initialProjects);
            this.render();
        },

        // render list by rendering each project in its collection
        render: function() {
            this.collection.each(function(item) {
                this.renderProject(item);
            }, this);
        },

        // render a project by creating a ProjectView and appending the
        // element it renders to the list' element
        renderProject: function(item) {

            var projectView = new app.ProjectView({
                model: item
            });

            this.$el.append(projectView.render().el);
        }
    });

})(jQuery);
