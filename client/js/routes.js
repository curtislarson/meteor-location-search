Router.route("/", {
  name: "index",
  onBeforeAction: function() {
    if (!GoogleMaps.loaded()) {
      GoogleMaps.load({
        key: Meteor.settings.public.google_maps_key,
        libraries: "geometry,places"
      });
    }
    this.next();
  },
  action: function() {
    this.render("index");
  }
});