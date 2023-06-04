import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Login() {
  const [email,setEmail]=useState("")
  const [pwd,setPwd]=useState("")
  const navigate=useNavigate()
  

  Axios.defaults.withCredentials=true
  useEffect(()=>{
    Axios.get('http://localhost:5000').then(res=>{
      if(res.data.valid===true){
        console.log("home page user: "+res.data.userData);
          navigate('/')
      }else if(res.data.valid===false){
        navigate('/login')
      }
    })
  })
  const send=(e)=>{
    e.preventDefault()  
      Axios.post("http://localhost:5000/login",{
        email:email,
        password:pwd
      }).then(res=>{ 
       if(res.data.Login===true){
        alert("sucessfully logined")
          navigate('/') 
       }else if(res.data.Login===false){
        alert("Password is mismatch")
       }else if(res.data.Message){
        alert("email not exist")
       }
      })
  }
  return (
    <div>
      <Navbar />
      <div>
        <form action="">
          <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">LOGIN</h1>

                <input
                  type="email"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email"
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                />

                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                  onChange={(e)=>{
                    setPwd(e.target.value)
                  }}
                />

                <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                  onClick={send}
                >
                  Login
                </button>
              </div>

              <div className="text-grey-dark mt-6">
                Don't have an account?
                <a
                  className="no-underline border-b border-blue text-blue"
                  href="/signup"
                >
                  Signup
                </a>
                .
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
