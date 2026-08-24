const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  res.json({
    status: 'ok',
    application: 'Anyiko File Uploader',
    message: 'API testing endpoint active'
  });
});

module.exports = router;
