// Anyiko File Uploader v1.1.0
// Production media processing foundation

const ffmpeg = require('fluent-ffmpeg');

class ProductionMediaProcessor {
  convertToMp3(inputFile, outputFile, bitrate = '320k') {
    return new Promise((resolve, reject) => {
      ffmpeg(inputFile)
        .audioCodec('libmp3lame')
        .audioBitrate(bitrate)
        .format('mp3')
        .on('end', () => resolve(outputFile))
        .on('error', reject)
        .save(outputFile);
    });
  }

  getSupportedFormats() {
    return ['mp3', 'wav', 'm4a', 'aac', 'flac'];
  }
}

module.exports = new ProductionMediaProcessor();
