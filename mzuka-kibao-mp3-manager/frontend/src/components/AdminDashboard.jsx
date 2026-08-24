import React from 'react';

const stats = [
  {title:'Total Users', value:'1'},
  {title:'Total Files', value:'3598'},
  {title:'Storage Used', value:'67.15 GB'},
  {title:'Security Level', value:'MAXIMUM'}
];

export default function AdminDashboard(){
 return (
  <div className="min-h-screen bg-black text-white p-6">
   <header className="rounded-2xl p-8 bg-gradient-to-r from-red-700 via-black to-blue-700 shadow-xl">
    <h1 className="text-4xl font-bold">MZUKA KIBAO ADMIN PANEL</h1>
    <p className="mt-2">Upload, manage and organize your music files</p>
   </header>

   <section className="grid md:grid-cols-4 gap-5 mt-6">
    {stats.map((item)=>(
     <div key={item.title} className="rounded-xl p-6 bg-zinc-900 border border-red-700">
      <h3 className="text-blue-400">{item.title}</h3>
      <p className="text-3xl font-bold mt-3">{item.value}</p>
     </div>
    ))}
   </section>

   <section className="mt-8 bg-zinc-900 rounded-xl p-6 border border-blue-700">
    <h2 className="text-2xl font-bold">Recently Uploaded</h2>
    <div className="mt-4 p-4 rounded-lg bg-black">DJ BUNDUKI - THE STREET VIBE 160 REGGAE ROOTSY PARTY MIX</div>
   </section>
  </div>
 );
}
