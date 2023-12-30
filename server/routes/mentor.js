const express = require("express");
const router = express.Router();
const {requests, addReview}= require('../databasehelpers/querries');
const conn = require("../databasehelpers/dbConnection/connection");

router.get("/",(req,res)=>{
    

})


router.get('/requests',(req,res)=>{
        
    conn.query(requests,(err,results,fields)=>{
        console.log("jvhj"+results[0].studentName);
        console.log(results[0].department);
        return res.json(results)
    })

})

router.post('/review',(req,res)=>{
    const rev=req.body.menReview
    const oNum=req.body.orderNum
    console.log(rev);
   
    conn.query(addReview,[rev,oNum],(err,result,fields)=>{
       if(result.affectedRows!=0){
        return res.json({Message:true})
       }else if(err){
            console.log(err);
       }
    })
})

module.exports=router