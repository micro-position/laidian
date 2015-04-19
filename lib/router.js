HomeController = RouteController.extend({
  onBeforeAction: function() {
    Meteor.subscribe('positions', function() {
    });
  }
});

Router.map(function() {
  this.route('home', {path: '/'});
});