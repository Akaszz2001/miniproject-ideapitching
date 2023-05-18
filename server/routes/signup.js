const express = require('express');
const bcrypt=require('bcrypt')
const saltRounds=5
const conn = require('../databaseConnection/connection');


const router=express.Router()

router.post('/',async(req,res)=>{
    const uname=req.body.uName;
    const email=req.body.uEmail;
    const pass=req.body.uPaswrd
    const hPass=await bcrypt.hash(pass,saltRounds)
    var sql="INSERT INTO signup(name,email,password,isAdmin) VALUES(?,?,?,?)"
    conn.query(sql,[uname,email,hPass,true],((err,res)=>{
            if(err){
                throw err;
            }else{
                console.log("data inserted");
            }
    }))
})

module.exports=router