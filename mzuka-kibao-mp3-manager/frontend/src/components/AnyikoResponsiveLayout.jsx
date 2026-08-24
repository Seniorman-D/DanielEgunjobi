import React from 'react';

export default function AnyikoResponsiveLayout({ children }) {
  return (
    <main className="anyiko-layout">
      <header className="anyiko-header">
        <h1>Anyiko File Uploader</h1>
        <p>Secure media upload and management system</p>
      </header>
      <section className="anyiko-content">{children}</section>
    </main>
  );
}
