import React from 'react';

export default function ProtectedAdminRoute({ authenticated, children }) {
  if (!authenticated) {
    return <div>Access denied. Please login as administrator.</div>;
  }

  return children;
}
