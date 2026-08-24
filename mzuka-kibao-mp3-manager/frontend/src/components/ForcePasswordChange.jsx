import React,{useState} from 'react';

export default function ForcePasswordChange(){
 const [password,setPassword]=useState('');
 const [status,setStatus]=useState('');

 const updatePassword=(e)=>{
  e.preventDefault();
  if(password.length < 6){
   setStatus('Password must contain at least 6 characters');
   return;
  }
  setStatus('Password updated successfully');
 };

 return (
  <div className="password-change">
   <h2>Change Temporary Admin Password</h2>
   <form onSubmit={updatePassword}>
    <input type="password" placeholder="New password" value={password} onChange={e=>setPassword(e.target.value)} />
    <button>Update Password</button>
   </form>
   <p>{status}</p>
  </div>
 );
}
