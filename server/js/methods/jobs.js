Meteor.methods({
  addJob: function(job) {
    check(job, Schemas.Job);
    Jobs.insert(job);
  }
});