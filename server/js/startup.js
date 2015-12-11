Meteor.startup(function() {
  Jobs._ensureIndex({"location.geometry": "2dsphere"});
});