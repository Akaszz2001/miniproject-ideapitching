const express = require('express');
const signup = require('../databasehelpers/signupHelper/sHelper');


const router=express.Router()

router.post('/',async(req,res)=>{
    
    const uname=req.body.uName;
    const email=req.body.uEmail;
    const pass=req.body.uPaswrd

   
    //signup function for create new user
    signup(uname,email,pass).then((result)=>{

        if(result==true){
            return res.json({userEnrol:true})
        }else{
            return res.json({Message:"This email is already exists"})
        }
              
    }).catch(err=>{
        return res.status(404).json({error:err})
    })
})

module.exports=router