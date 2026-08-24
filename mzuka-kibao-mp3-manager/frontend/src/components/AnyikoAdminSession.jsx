import React from 'react';

export default function AnyikoAdminSession({ user, onLogout }) {
  return (
    <div className="admin-session">
      <span>Welcome, {user || 'Admin'}</span>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
