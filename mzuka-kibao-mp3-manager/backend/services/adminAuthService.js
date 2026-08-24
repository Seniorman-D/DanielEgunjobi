// Anyiko Admin Authentication Service
// Temporary bootstrap admin account
// Username: Anyiko
// Password: Anyiko
// Production should replace this with hashed credentials stored in database.

const defaultAdmin = {
  username: "Anyiko",
  role: "Super Admin",
  forcePasswordChange: true
};

function validateAdmin(username, password) {
  return username === "Anyiko" && password === "Anyiko";
}

function requirePasswordChange() {
  return true;
}

module.exports = {
  defaultAdmin,
  validateAdmin,
  requirePasswordChange
};
