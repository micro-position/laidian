Template.home.helpers({
	posFound: function(){
		return Session.get("posFound");
	},
	posNotFound: function(){
		return Session.get("posNotFound");
	},
	locating:function(){
		return !Session.get("posFound") && !Session.get("posNotFound");
	},
	pos:function(){
		return Session.get("pos");
	},
});

Template.home.events({
  'click .relocate': function(event) {
    BC.locating();
  },
})