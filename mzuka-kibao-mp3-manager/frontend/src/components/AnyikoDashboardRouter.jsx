import React from 'react';

const AnyikoDashboardRouter = ({ activePage = 'dashboard' }) => {
  const pages = {
    dashboard: 'Anyiko Admin Dashboard',
    upload: 'Upload Center',
    importer: 'Streaming Import',
    files: 'File Manager',
    tags: 'Metadata & Tags',
    users: 'User Management'
  };

  return (
    <div className="anyiko-dashboard">
      <header>
        <h1>{pages[activePage] || 'Anyiko File Uploader'}</h1>
        <p>Anyiko File Uploader / Upload System</p>
      </header>
    </div>
  );
};

export default AnyikoDashboardRouter;
