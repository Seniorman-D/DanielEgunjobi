// Anyiko File Uploader API Client
// Handles authenticated communication with backend services

const API_URL = process.env.API_URL || 'http://localhost:5000';

export async function apiRequest(endpoint, options = {}) {
  const token = localStorage.getItem('anyiko_token');

  return fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
}

export default apiRequest;
