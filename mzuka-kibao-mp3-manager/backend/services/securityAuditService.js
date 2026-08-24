const auditLogs = [];

function recordAction(user, action, details = {}) {
  const log = {
    user,
    action,
    details,
    timestamp: new Date().toISOString()
  };

  auditLogs.push(log);
  return log;
}

function getAuditLogs() {
  return auditLogs;
}

module.exports = {
  recordAction,
  getAuditLogs
};
