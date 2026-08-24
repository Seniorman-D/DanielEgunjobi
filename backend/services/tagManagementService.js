// Anyiko Advanced Tag Management Service

class TagManagementService {
  constructor() {
    this.tags = [];
  }

  createTag(tag) {
    const item = { id: Date.now(), ...tag };
    this.tags.push(item);
    return item;
  }

  updateTag(id, data) {
    const tag = this.tags.find(t => t.id === id);
    if (!tag) return null;
    Object.assign(tag, data);
    return tag;
  }

  deleteTag(id) {
    this.tags = this.tags.filter(t => t.id !== id);
    return true;
  }

  getTags() {
    return this.tags;
  }
}

module.exports = new TagManagementService();
