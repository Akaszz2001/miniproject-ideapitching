const express=require('express')

const router=express.Router()

router.get('/',(req,res)=>{
    let user=req.session.user
    
   

    if(req.session.Admin===1){
        console.log(req.session.loggedIn);
        return res.json({admin:true,userData:req.session.user})
    }else if(req.session.Admin===0){
        return res.json({admin:false,userData:req.session.user})
    }else{
        return res.json({admin:null})
    }
   

})

module.exports=router