// Anyiko Batch Control Manager

class BatchControlManager {
  constructor() {
    this.jobs = {};
  }

  pause(jobId) {
    if (this.jobs[jobId]) this.jobs[jobId].status = 'paused';
    return this.jobs[jobId];
  }

  resume(jobId) {
    if (this.jobs[jobId]) this.jobs[jobId].status = 'processing';
    return this.jobs[jobId];
  }

  retry(jobId) {
    if (this.jobs[jobId]) this.jobs[jobId].status = 'retrying';
    return this.jobs[jobId];
  }
}

module.exports = new BatchControlManager();
