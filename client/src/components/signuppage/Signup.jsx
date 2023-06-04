/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Signup() {
    const [name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[pwd,setPwd]=useState('')
    const navigate = useNavigate()
    const send=(e)=>{
            e.preventDefault()
            Axios.post("http://localhost:5000/signup",{
                uName:name,
                uEmail:email,
                uPaswrd:pwd
            }).then((res)=>{
                if(res.data.userEnrol){
                    alert("Successfully created new account")
                    navigate('/login')
                }else if(res.data.Message){
                    alert("This email is already used")
                }
            })
        
        }
  return (
    <div>
      <Navbar/>
<form action="">
<div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" 
                        onChange={(e)=>{setName(e.target.value)}} />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                        onChange={(e)=>{setEmail(e.target.value)}}
                        />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        onChange={(e)=>{setPwd(e.target.value)}} />
                    

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                        onClick={send}
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="/login">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
</form>

    </div>
  )
}

export default Signup