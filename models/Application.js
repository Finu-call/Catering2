const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  jobId: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId,
  resume: String,
  coverLetter: String,
  status: { type: String, default: 'pending' },
  appliedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', applicationSchema);