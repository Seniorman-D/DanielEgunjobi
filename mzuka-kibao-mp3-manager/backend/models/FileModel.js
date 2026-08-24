// Anyiko File Uploader - File Model

const files = [];

function createFile(data) {
  const file = {
    id: Date.now(),
    name: data.name,
    originalName: data.originalName,
    size: data.size,
    type: data.type,
    url: data.url,
    status: 'uploaded',
    createdAt: new Date()
  };

  files.push(file);
  return file;
}

function getFiles() {
  return files;
}

module.exports = {
  createFile,
  getFiles
};
