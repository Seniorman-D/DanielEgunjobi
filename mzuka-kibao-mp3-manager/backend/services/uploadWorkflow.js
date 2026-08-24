const mediaProcessor = require('./mediaProcessor');
const storageManager = require('./storageManager');

async function processUpload(file){
 const storedFile = await storageManager.save(file);
 const processed = await mediaProcessor.process(storedFile);
 return {
  status:'completed',
  file:processed
 };
}

module.exports = { processUpload };
