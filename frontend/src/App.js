import React, { useState } from "react";

export default function App() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  async function register(){
    await fetch("http://127.0.0.1:8000/api/auth/register",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({email,password})
    });
    alert("Registered");
  }

  async function login(){
    const r=await fetch("http://127.0.0.1:8000/api/auth/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({email,password})
    });
    alert(JSON.stringify(await r.json()));
  }

  return (
    <div style={{textAlign:"center",marginTop:50}}>
      <h1>Enterprise Signature App</h1>
      <input placeholder="email" onChange={e=>setEmail(e.target.value)} /><br/>
      <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)} /><br/>
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
    </div>
  );
}