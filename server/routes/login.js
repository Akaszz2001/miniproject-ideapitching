const express=require('express')
const router=express.Router()

    router.post("/",(req,res)=>{
        const id=req.body.email;
        console.log(`user${id}`);
    })
      
module.exports=router