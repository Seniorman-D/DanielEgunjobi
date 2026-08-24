import React, {useState} from 'react';

export default function AnyikoDragDropUploader(){
 const [files,setFiles]=useState([]);
 const handleDrop=e=>{
  e.preventDefault();
  setFiles(Array.from(e.dataTransfer.files));
 };
 return <div className="anyiko-uploader" onDrop={handleDrop} onDragOver={e=>e.preventDefault()}>
  <h3>Anyiko Upload Center</h3>
  <p>Drag MP3 files here or select files</p>
  {files.map((f,i)=><div key={i}>{f.name}</div>)}
 </div>;
}
