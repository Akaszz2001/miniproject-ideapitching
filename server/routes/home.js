const express=require('express')

const router=express.Router()

router.get('/',(req,res)=>{
    let user=req.session.user
    
    console.log("user status:"+req.session.loggedIn);
    console.log('session '+user);

    if(req.session.loggedIn){
        console.log(req.session.loggedIn);
        return res.json({valid:true,userData:req.session.user})
    }else{
        return res.json({valid:false})
    }
   

})

module.exports=router