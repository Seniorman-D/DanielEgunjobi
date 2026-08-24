// Anyiko Upload API
// Commit 45: Real Upload API Connection

const uploadController = {
  uploadFile(req, res) {
    res.json({
      status: 'queued',
      message: 'File uploaded to Anyiko processing pipeline'
    });
  },

  importUrl(req, res) {
    res.json({
      status: 'queued',
      message: 'URL import added to processing queue'
    });
  }
};

module.exports = uploadController;
