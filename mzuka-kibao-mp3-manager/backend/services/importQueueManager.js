// Anyiko Import Queue Manager
// Handles streaming import jobs before processing

const jobs = [];

function addJob(job) {
  const queuedJob = {
    id: Date.now().toString(),
    ...job,
    status: 'queued',
    createdAt: new Date().toISOString()
  };

  jobs.push(queuedJob);
  return queuedJob;
}

function getJobs() {
  return jobs;
}

function updateJobStatus(id, status) {
  const job = jobs.find(item => item.id === id);
  if (!job) return null;

  job.status = status;
  return job;
}

module.exports = {
  addJob,
  getJobs,
  updateJobStatus
};
