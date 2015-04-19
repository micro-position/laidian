HomeController = RouteController.extend({
  onBeforeAction: function() {
    Meteor.subscribe('ibeacons', function() {
      dataReadyHold.release();
    });
  }
});


Router.map(function() {
  this.route('home', {path: '/'});
});