// Anyiko API Key Management Service

class ApiKeyManager {
  createKey(userId) {
    return {
      userId,
      key: 'ANYIKO_API_KEY_' + Date.now(),
      status: 'active'
    };
  }

  revokeKey(key) {
    return { key, status: 'revoked' };
  }
}

module.exports = new ApiKeyManager();
