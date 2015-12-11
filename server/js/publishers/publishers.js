Meteor.publish("jobSearch", function(searchData) {
  if (!searchData) {
    return [];
  }

  console.log("s=", searchData);

  var radius = searchData.radius;
  var centerLat = searchData.location.lat;
  var centerLon = searchData.location.lng;

  var selector = {
    "location.geometry": {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [centerLon, centerLat]
        },
        $maxDistance: radius * 1000,
        $minDistance: 0
      }
    }
  };

  console.log("selector=", selector);

  return Jobs.find(selector);
});