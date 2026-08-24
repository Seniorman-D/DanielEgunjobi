// Anyiko Import Queue Manager
// Handles pending imports, processing states and retry workflow.

class ImportQueueManager {
  constructor() {
    this.queue = [];
  }

  addJob(job) {
    this.queue.push({
      id: Date.now(),
      status: 'pending',
      retries: 0,
      ...job
    });
  }

  updateStatus(id, status) {
    const job = this.queue.find(item => item.id === id);
    if (job) job.status = status;
    return job;
  }

  retry(id) {
    const job = this.queue.find(item => item.id === id);
    if (job) {
      job.retries += 1;
      job.status = 'pending';
    }
    return job;
  }
}

module.exports = new ImportQueueManager();
