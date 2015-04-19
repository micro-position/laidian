Meteor.publish('ibeacons', function() {
  return IBeacons.find();
});