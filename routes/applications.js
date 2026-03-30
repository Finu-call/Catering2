const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

router.post('/', async (req, res) => {
  const application = new Application(req.body);
  await application.save();
  res.json(application);
});

router.get('/:userId', async (req, res) => {
  const applications = await Application.find({ userId: req.params.userId });
  res.json(applications);
});

module.exports = router;