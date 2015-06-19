var app = app || {};

(function($) {
    'use strict';

    app.ListView = Backbone.View.extend({
        el: '.projects',
        events: {
            'click #fe-btn': 'showFE',
            'click #fs-btn': 'showFS'
        },

        initialize: function(initialProjects) {
            this.collection = new app.ProjectList(initialProjects);
            this.render();
            this.$fe = $('.projects');
            this.$fs = $('.fs-projects');

        },

        // render list by rendering each project in its collection
        render: function() {

            this.appendBtn();
            this.collection.each(function(item) {
                this.renderProject(item);
            }, this);
        },

        // render a project by creating a ProjectView and appending the
        // element it renders to the list' element
        renderProject: function(item, projElement) {

            var projectView = new app.ProjectView({
                model: item
            });

            this.$el.append(projectView.render().el);
        },
        hide: function() {
            this.$el.hide();
        },
        showFE: function() {
            console.log('FE')
            this.$fs.hide();
            this.$fe.show();
        },
        showFS: function() {
            console.log('FS');
            this.$fe.hide();
            this.hide();
            this.$fs.show();
            this.$('.fs-projects').show();
        },
        showItNow: function() {
            this.showFS();
        },
        appendBtn: function() {
            $('#feature').append('<button id="fe-btn" class="text-primary">Front-End Projects</button>');
        }
    });

    app.FSListView = app.ListView.extend({
        el: '.fs-projects',
        appendBtn: function() {
            $('#feature').append('<button id="fs-btn" class="text-primary">Full Stack Projects</button>');
        }
    });

})(jQuery);
