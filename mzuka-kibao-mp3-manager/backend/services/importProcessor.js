// Anyiko Import Processor Pipeline

const { detectSource } = require('./streamConnectors');

async function processImport(url) {
  const source = detectSource(url);

  return {
    source,
    url,
    steps: [
      'source-validation',
      'import-queue',
      'media-processing',
      'metadata-extraction',
      'library-registration'
    ],
    status: 'queued'
  };
}

module.exports = {
  processImport
};
