import React from 'react';

export default function FileManager(){
 const files=[
  'DJ BUNDUKI - THE STREET VIBE 160 REGGAE ROOTSY PARTY MIX',
  'DJ BUNDUKI - THE STREET VIBE 157 BEST OF FALLY IPUPA 2026 MIX',
  'DJ BUNDUKI - THE STREET VIBE 156 KENYAN OLDSCHOOL 2026 MIX'
 ];
 return <div className="bg-zinc-900 p-6 rounded-xl text-white">
  <h2 className="text-2xl font-bold mb-5">Your Files</h2>
  {files.map(file=><div key={file} className="p-4 mb-3 bg-black rounded-lg border border-blue-700 flex justify-between">
   <span>{file}.mp3</span>
   <button className="bg-red-600 px-4 rounded">Delete</button>
  </div>)}
 </div>
}
