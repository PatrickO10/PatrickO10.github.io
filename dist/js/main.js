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
var app = app || {};

(function() {
    'use strict';

    app.Project = Backbone.Model.extend({

        defaults: {
            title: '',
            image: '',
            description: '',
            demo: '',
            source: ''
        },

        dump: function() {
            console.log(JSON.stringify(this.toJSON()));
        }
    });

})();

var app = app || {};

(function() {
    'use strict';

    app.ContactList = Backbone.Collection.extend({
        model: app.Contact
    });

})();
var app = app || {};

(function() {
    'use strict';

    app.ProjectList = Backbone.Collection.extend({
        model: app.Project
    });

})();

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

var app = app || {};

(function($) {
    'use strict';

    app.ListView = Backbone.View.extend({
        el: '.projects',
        events: {
            'click #fe-btn': 'clickedFEBtn',
            'click #fs-btn': 'clickedFSBtn'
        },

        initialize: function(feProjects, fsProjects) {
            this.feProjects = feProjects;
            this.fsProjects = fsProjects;
            this.collection = new app.ProjectList(this.feProjects);
            this.render();
        },

        // render list by rendering each project in its collection
        render: function() {
            this.collection.each(function(item) {
                this.renderProject(item);
            }, this);
            this.animateProjects();
        },

        // render a project by creating a ProjectView and appending the
        // element it renders to the list' element
        renderProject: function(item, projElement) {
            var projectView = new app.ProjectView({
                model: item
            });
            this.$el.append(projectView.render().el);
        },

        // 'this' is handling DOM element
        clickedFEBtn: function(event) {
            // Removes existing articles.
            $('article').remove();
            this.collection.set(this.feProjects);
            this.render();
        },

        // 'this' is handling DOM element
        clickedFSBtn: function(event) {
            // Removes existing articles.
            $('article').remove();
            this.collection.set(this.fsProjects);
            this.render();
        },
        animateProjects: function() {
            // Animate the projects when a render() is called.
            $('.card').hide().first().show("fast", function showNext() {
                $(this).next("article").show("fast", showNext);
            });
        }
    });

})(jQuery);

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

var app = app || {};

$(function() {
    'use strict';

    var frontEndProjects = [{
        title: 'Neighborhood Map',
        image: 'dist/images/nhm.png',
        description: ' At first I was provided with a design mockup in the form of a PDF-file, I replicated the design using HTML and CSS.

  After finishing my nanodegree I upgraded my profile, using Bootstrap and Backbone.js.  I had a lot of fun adding front-end and full stack projects to the page.',
        demo: 'https://patricko10.github.io/neighborhood-map',
        source: 'https://github.com/PatrickO10/neighborhood-map'
    }, {
        title: 'Feed Reader Testing',
        image: 'dist/images/frtest.png',
        description: 'I enjoyed writing unit suites, testing one unit at a time.',
        demo: 'http://patricko10.github.io/frontend-nanodegree-feedreader/',
        source: 'https://github.com/PatrickO10/frontend-nanodegree-feedreader'
    }, {
        title: 'Frogger Arcade',
        image: 'dist/images/frogger.png',
        demo: 'https://patricko10.github.io/froggerArcade',
        description: 'I enjoyed using the psuedoclassical class pattern. I especially liked my guardian subclass, which helps the hero score more points!',
        source: 'https://github.com/PatrickO10/froggerArcade'
    }, {
        title: 'Website Optimization',
        image: 'dist/images/pizza.png',
        description: 'I enjoyed optimizing the pizza frame rate to 60 fps.  I removed slow code from the JavaScript file to unblock the rendering because if the code is still running in the call stack the page won\'t render.',
        demo: 'http://patricko10.github.io/udportfolio/',
        source: 'https://github.com/PatrickO10/udportfolio'
    }, {
        title: 'Interactive Resume',
        image: 'dist/images/irimg.png',
        description: 'I enjoyed playing around with Google Map.

What made my project unique was when you click on an icon the background changes to a street view image and then the pano appears to the right of the map.

I also added a recursive function to that process.  Sometimes there wouldn\'t be a street view for the pano if the radius wasn\'t large enough, so I made a function call itself increasing the search area until it found one.',
        demo: 'https://patricko10.github.io/interactive-resume',
        source: 'https://github.com/PatrickO10/interactive-resume'
    }, {
        title: 'Portfolio',
        image: 'dist/images/port-pic.png',
        description: 'I enjoyed building a responsive webpage, using Backbone.js, bootstrap, underscore, jQuery. One of my favorite parts was adding two sets of projects.',
        demo: 'http://patricko10.github.io/',
        source: 'https://github.com/PatrickO10/PatrickO10.github.io'
    }];

    var fullStackProjects = [{
        title: 'Movie Trailers',
        image: 'dist/images/movie_trail.png',
        description: 'I enjoyed picking several different movie trailers to add.',
        demo: 'https://patricko10.github.io/movie_trailers',
        source: 'https://github.com/PatrickO10/movie_trailers'
    }, {
        title: 'Tournament Planner',
        image: 'dist/images/chess.png',
        description: 'I enjoyed creating a database for the first time using SQL. What was unique about my project is I created a helper method to manipulate the database in Python.',
        source: 'https://github.com/PatrickO10/tournament_planner'
    }, {
        title: 'Item Catalog',
        image: 'dist/images/construction.png'
    }, {
        title: 'Conference Organization App',
        image: 'dist/images/construction.png'
    }, {
        title: 'Linux Server Configuration',
        image: 'dist/images/construction.png'
    }];

    var myContacts = [{
        url: 'mailto:patrickorth10@gmail.com',
        ion: 'email'
    }, {
        url: 'tel: +1-612-424-9883',
        ion: 'ios-telephone'
    }, {
        url: 'https://www.linkedin.com/pub/patrick-orth/97/91a/221',
        ion: 'social-linkedin'
    }, {
        url: 'https://github.com/PatrickO10',
        ion: 'social-github'
    }, {
        url: 'https://twitter.com/patrick_orth',
        ion: 'social-twitter'
    }];

    app.listView = new app.ListView(frontEndProjects, fullStackProjects);
    app.contactLV = new app.ContactListView(myContacts);
});
