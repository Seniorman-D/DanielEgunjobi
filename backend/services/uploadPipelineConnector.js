// Anyiko Upload Pipeline Connector
// Commit 45

class UploadPipelineConnector {
  connectUpload(file) {
    return {
      file,
      pipeline: 'Anyiko Media Pipeline',
      status: 'processing'
    };
  }
}

module.exports = new UploadPipelineConnector();
