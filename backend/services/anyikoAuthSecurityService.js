// Anyiko Authentication & Security Service
// Commit 76 foundation

const DEFAULT_ADMIN = {
  username: 'Anyiko',
  password: 'Anyiko'
};

function authenticate(username, password) {
  return username === DEFAULT_ADMIN.username && password === DEFAULT_ADMIN.password;
}

function changePassword(newPassword) {
  return {
    updated: true,
    message: 'Admin password change workflow ready'
  };
}

function createSession(user) {
  return {
    user,
    createdAt: new Date().toISOString()
  };
}

module.exports = {
  authenticate,
  changePassword,
  createSession
};
