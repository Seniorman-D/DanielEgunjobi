// Anyiko Processing API

const express = require('express');
const router = express.Router();

const jobs = {};

router.get('/status/:jobId', (req, res) => {
  const job = jobs[req.params.jobId];

  if (!job) {
    return res.status(404).json({
      status: 'not_found'
    });
  }

  res.json(job);
});

router.post('/update/:jobId', (req, res) => {
  jobs[req.params.jobId] = {
    id: req.params.jobId,
    status: req.body.status || 'processing',
    progress: req.body.progress || 0,
    updated: new Date()
  };

  res.json(jobs[req.params.jobId]);
});

module.exports = router;
