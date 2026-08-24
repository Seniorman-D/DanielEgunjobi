import React from 'react';

export default function UploadCenter(){
 return (
  <div className="min-h-screen bg-black text-white p-8">
   <div className="bg-gradient-to-r from-red-700 via-black to-blue-700 rounded-3xl p-8 shadow-xl">
    <h1 className="text-4xl font-bold">🎵 Mzuka Kibao MP3 Manager Pro</h1>
    <p className="mt-2 text-gray-200">Upload, convert and manage your music library</p>
   </div>

   <div className="mt-8 bg-white text-black rounded-3xl p-8">
    <h2 className="text-2xl font-bold mb-5">Upload Files</h2>
    <div className="grid md:grid-cols-2 gap-5">
      <button className="border-2 border-red-600 rounded-xl p-6">⬆ Upload from Computer</button>
      <button className="border-2 border-blue-600 rounded-xl p-6">🔗 Upload from URL / Streaming</button>
    </div>

    <div className="mt-6 border-dashed border-2 border-gray-400 rounded-2xl p-12 text-center">
      <h3 className="text-xl font-bold">Drop your audio files here</h3>
      <p>Supports MP3, WAV, M4A, AAC, FLAC</p>
    </div>

    <div className="mt-6 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-xl p-4 text-center font-bold">
      Upload & Convert to MP3
    </div>
   </div>
  </div>
 );
}
