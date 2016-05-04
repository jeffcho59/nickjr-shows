

//Model

  var Program = Backbone.Model;

//Collection

  var ProgramCollection = Backbone.Collection.extend({
    model: Program,
    url: 'http://origin-arc.nick-q.mtvi.com/api/v2/editorial-content-categories/properties?apiKey=nickjr.com',
    parse: function (response) {
      return response
}
  });

//Views

  var About = Backbone.View.extend ({
    el: '.page',
    render: function () {
      var that = this;
      var program = new ProgramCollection();
      program.fetch({
        success: function (ProgramCollection) {
          var template = _.template($('#program-template').html(), {ProgramCollection: ProgramCollection.models});
          that.$el.html(template);
        }
      })
    }
  });


  var About = new About ();

//Routes

  var Router = Backbone.Router.extend({
    routes: {
      '': 'home'
    }
  });

  var router = new Router();
  router.on('route:home', function () {
    About.render();
  });

  Backbone.history.start();
