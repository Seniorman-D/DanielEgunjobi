import React, {useState} from 'react';

export default function AnyikoLogin(){
 const [username,setUsername]=useState('');
 const [password,setPassword]=useState('');
 const [message,setMessage]=useState('');

 const login=(e)=>{
  e.preventDefault();
  if(username==='Anyiko' && password==='Anyiko'){
   setMessage('Login successful. Password change required.');
  } else {
   setMessage('Invalid login details');
  }
 };

 return (
  <div className="anyiko-login">
   <h1>Anyiko File Uploader</h1>
   <form onSubmit={login}>
    <input placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
    <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
    <button type="submit">Login</button>
   </form>
   <p>{message}</p>
  </div>
 );
}
