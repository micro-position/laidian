Session.set("posFound",false);
Session.set("posNotFound",false);
Session.set("pos",null);

var locating = function(){
	Session.set("posFound",false);
	Session.set("posNotFound",false);
	Session.set("pos",null);

 	BC.Bluetooth.StartScan('LE');

  	setTimeout(function(){
  		var theibeacon = null;
  		var maxRSSI = -65535;
  		var pos = null;
  		_.each(BC.bluetooth.devices,function(device){
  			if(device.deviceName == "MI" && device.RSSI > maxRSSI){
  				theibeacon = device;
  			}
  		});

  		if(theibeacon != null){
  			pos = IBeacons.find({ibeaconid:theibeacon.deviceAddress}).fetch()[0];
  			Session.set("posFound",true);
  		}else{
  			Session.set("posNotFound",true);
  		}
  		Session.set("pos",pos);
  		BC.Bluetooth.StopScan('LE');
   	},3000);
}

Meteor.startup(function() {
  document.addEventListener("bcready",function(){
  	BC.locating = locating;
  	locating();
  });
});
