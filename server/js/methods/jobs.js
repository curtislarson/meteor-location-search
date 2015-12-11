Meteor.methods({
  addJob: function(job) {
    console.log("job=", job);
    Jobs.insert(job);
  }
});