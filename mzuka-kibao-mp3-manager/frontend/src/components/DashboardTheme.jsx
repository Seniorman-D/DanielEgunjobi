import React from 'react';

export default function DashboardTheme() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="rounded-3xl p-8 bg-gradient-to-r from-red-700 via-black to-blue-700 shadow-2xl">
        <h1 className="text-4xl font-bold">MZUKA KIBAO ADMIN PANEL</h1>
        <p className="mt-3 text-blue-200">Manage music uploads, tags, users and downloads.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mt-8">
        {['Total Users','Total Files','Storage Used','Security Level'].map((item)=>(
          <div key={item} className="bg-neutral-900 border border-blue-600 rounded-2xl p-6">
            <h2 className="text-red-500 font-bold">{item}</h2>
            <p className="text-3xl mt-4 text-blue-400">--</p>
          </div>
        ))}
      </div>
    </div>
  );
}
