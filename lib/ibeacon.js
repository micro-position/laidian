IBeacons = new Mongo.Collection('ibeacons');

IBeacons.allow({

});

if (Meteor.isServer && IBeacons.find().count() === 0) {
  Meteor.startup(function() {
    IBeacons.insert({
      ibeaconid: '88:0F:10:5E:5C:AA'
    });
  });
}