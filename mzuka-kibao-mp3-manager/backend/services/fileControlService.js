class FileControlService {
  constructor(){
    this.files = [];
  }

  addFile(file){
    this.files.push(file);
    return file;
  }

  listFiles(){
    return this.files;
  }

  deleteFile(id){
    this.files = this.files.filter(file => file.id !== id);
    return true;
  }
}

module.exports = new FileControlService();
