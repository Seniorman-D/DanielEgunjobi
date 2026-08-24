// Anyiko File Uploader - User Model

const users = [];

class UserModel {
  static create(user) {
    const newUser = {
      id: Date.now(),
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role || 'User',
      createdAt: new Date()
    };

    users.push(newUser);
    return newUser;
  }

  static findByEmail(email) {
    return users.find(user => user.email === email);
  }
}

module.exports = UserModel;
