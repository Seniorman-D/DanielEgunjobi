// Anyiko Background Processing Queue Foundation

const queue = [];

function addJob(job) {
  queue.push({
    id: Date.now(),
    status: 'pending',
    ...job
  });
}

function getJobs() {
  return queue;
}

module.exports = {
  addJob,
  getJobs
};
