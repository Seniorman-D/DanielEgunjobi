import React from 'react';

const AnyikoNavigation = () => {
  const menu = [
    'Dashboard',
    'Upload Files',
    'URL Import',
    'File Manager',
    'Tags',
    'Users',
    'Settings'
  ];

  return (
    <nav className="anyiko-navigation">
      {menu.map((item) => (
        <button key={item}>{item}</button>
      ))}
    </nav>
  );
};

export default AnyikoNavigation;
