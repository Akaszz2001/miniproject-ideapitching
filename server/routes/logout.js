const express=require('express')
const router =express.Router()

router.get('/',(req,res,next)=>{
    if(req.session.loggedIn){
     req.session.destroy()
      return res.json({Login:false})
    }else{
      next()
    }
  })

  module.exports= router