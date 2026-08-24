// Anyiko File Uploader - File Data Routes

const express = require('express');
const router = express.Router();

router.get('/files', async (req, res) => {
  res.json({
    success: true,
    files: []
  });
});

router.post('/files/register', async (req, res) => {
  res.json({
    success: true,
    message: 'File registered successfully'
  });
});

module.exports = router;
