// Anyiko Storage Manager

class StorageManager {
  save(file) {
    return {
      filename: file.filename,
      path: `/storage/${file.filename}`,
      status: 'stored'
    };
  }
}

module.exports = new StorageManager();
