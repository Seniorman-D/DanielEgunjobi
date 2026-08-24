import React from 'react';
import '../styles/anyiko-theme.css';

export default function AnyikoLayout({children}) {
  return (
    <div className="anyiko-dashboard">
      <aside className="anyiko-sidebar">
        <h2>Anyiko</h2>
        <nav>
          <div>Dashboard</div>
          <div>Upload Files</div>
          <div>File Library</div>
          <div>Import Queue</div>
          <div>Storage</div>
          <div>User Management</div>
        </nav>
      </aside>
      <main>{children}</main>
    </div>
  );
}
