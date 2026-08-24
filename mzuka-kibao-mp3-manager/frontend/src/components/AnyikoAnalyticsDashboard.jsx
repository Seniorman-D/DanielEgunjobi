import React from 'react';

export default function AnyikoAnalyticsDashboard() {
  const stats = [
    { label: 'Total Uploads', value: '0' },
    { label: 'Downloads', value: '0' },
    { label: 'Storage Used', value: '0 GB' },
    { label: 'Active Users', value: '0' }
  ];

  return (
    <div className="anyiko-analytics">
      <h2>Anyiko Analytics Dashboard</h2>
      <div className="stats-grid">
        {stats.map((item) => (
          <div key={item.label} className="stat-card">
            <h3>{item.label}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
