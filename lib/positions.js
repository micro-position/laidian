Positions = new Mongo.Collection('positions');

Positions.allow({

});

if (Meteor.isServer && Positions.find().count() === 0) {
  Meteor.startup(function() {
  	if(IBeacons.find({ibeaconid:'88:0F:10:5E:5C:AA'}).count()!==0){
	     Positions.insert({
	      ibeaconid: '88:0F:10:5E:5C:AA',
	      position: '北京市海淀区学院路30号绿山咖啡11号桌',
	      date: new Date
	    }); 		
  	}
  });
}