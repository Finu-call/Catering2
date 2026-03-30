const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  description: String,
  salary: Number,
  jobType: String,
  category: String,
  postedDate: { type: Date, default: Date.now },
  deadline: Date
});

module.exports = mongoose.model('Job', jobSchema);