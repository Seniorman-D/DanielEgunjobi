// Anyiko File Uploader - Storage Manager

const path = require('path');
const crypto = require('crypto');

const STORAGE_ROOT = path.join(__dirname, '../storage');

function generateFileName(originalName) {
  const extension = path.extname(originalName);
  const uniqueId = crypto.randomBytes(8).toString('hex');
  return `${Date.now()}-${uniqueId}${extension}`;
}

function getStoragePath(fileName) {
  return path.join(STORAGE_ROOT, fileName);
}

function getFileUrl(fileName) {
  return `/uploads/${fileName}`;
}

module.exports = {
  STORAGE_ROOT,
  generateFileName,
  getStoragePath,
  getFileUrl
};
