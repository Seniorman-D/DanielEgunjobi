import React, {useState} from 'react';
import apiClient from '../services/apiClient';

export default function UploadWorkflow(){
 const [file,setFile]=useState(null);
 const [status,setStatus]=useState('Ready');
 const upload=async()=>{
  if(!file) return;
  const data=new FormData();
  data.append('file',file);
  setStatus('Uploading...');
  try{
   await apiClient.post('/upload',data);
   setStatus('Processing complete');
  }catch(e){setStatus('Upload failed');}
 };
 return <div className="anyiko-upload-workflow">
  <h2>Anyiko File Uploader</h2>
  <input type="file" accept="audio/*" onChange={e=>setFile(e.target.files[0])}/>
  <button onClick={upload}>Upload & Process</button>
  <p>{status}</p>
 </div>
}
