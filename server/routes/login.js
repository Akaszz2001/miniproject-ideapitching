const express=require('express');
const Login = require('../databasehelpers/loginHelper/lHelper');

const router=express.Router()


    router.post("/",(req,res,next)=>{
       const uEmail=req.body.email;
       const uPwd=req.body.password
   Login(uEmail,uPwd).then((result)=>{
    
if(result[1]==false){
  return res.json({Login:false})
}else if(result[1]==true){
  console.log("username for session:"+result[0]);
    let userdata=result[0]
   req.session.user=userdata
   req.session.loggedIn=true
    console.log("session data"+req.session.user);
    req.session.save()
     return res.json({Login:true,username:req.session.user})
}else if(result[0]==uEmail){
      return res.json({Message:"email not exists"})
}
   })
 })
      
module.exports=router