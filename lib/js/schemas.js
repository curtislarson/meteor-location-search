Schemas = {};

Schemas.Address = new SimpleSchema({
  fullAddress: {
    type: String
  },
  lat: {
    type: Number,
    decimal: true
  },
  lng: {
    type: Number,
    decimal: true
  },
  geometry: {
    type: Object,
    blackbox: true
  },
  placeId: {
    type: String
  },
  street: {
    type: String,
    max: 100
  },
  city: {
    type: String,
    max: 50
  },
  state: {
    type: String,
  },
  zip: {
    type: String,
  },
  country: {
    type: String
  },
  location: {
    type: Object,
    optional: true
  },
  "location.type": {
    type: String,
    optional: true
  },
  "location.coordinates": {
    type: [Number],
    decimal: true,
    optional: true
  },
});

Schemas.Job = new SimpleSchema({
  title: {
    type: String,
    autoform: {
      label: false,
      placeholder: "Title"
    }
  },
  location: {
    type: Schemas.Address,
    autoform: {
      label: false,
      placeholder: "Address"
    }
  }
});

Schemas.Search = new SimpleSchema({
  location: {
    type: Schemas.Address,
    autoform: {
      label: false,
      placeholder: "Address"
    }
  },
  radius: {
    type: Number,
    autoform: {
      label: false,
      placeholder: "Radius (km)"
    }
  }
});

Jobs = new Mongo.Collection("jobs");

Jobs.attachSchema(Schemas.Job);

