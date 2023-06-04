import React,{useEffect, useState} from 'react'
import Axios from 'axios'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
function Home() { 
  const [user,setUser]=useState('')
  const navigate=useNavigate()
  Axios.defaults.withCredentials=true
useEffect(()=>{
  Axios.get('http://localhost:5000').then(res=>{
    if(res.data.valid===true){
      console.log("home page user: "+res.data.userData);
        setUser(res.data.userData)
    }else if(res.data.valid===false){
      console.log("no user");
      navigate('/login')
    }
  })
})


  
  return (
   <div>
      <Navbar data={user}/>
      <div className="">
       welcome home {user}
      </div>
   </div>
     
  )
}

export default Home