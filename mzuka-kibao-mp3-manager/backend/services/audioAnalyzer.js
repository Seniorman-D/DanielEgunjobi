// Anyiko File Uploader v1.1.0
// Audio analysis service foundation

const ffmpeg = require('fluent-ffmpeg');

function analyzeAudio(filePath) {
  return new Promise((resolve, reject) => {
    ffmpeg.ffprobe(filePath, (error, metadata) => {
      if (error) return reject(error);

      resolve({
        duration: metadata.format.duration || 0,
        bitrate: metadata.format.bit_rate || 0,
        format: metadata.format.format_name || ''
      });
    });
  });
}

module.exports = { analyzeAudio };
