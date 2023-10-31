const express = require("express");
const conn = require("../databasehelpers/dbConnection/connection");
const router = express.Router();
const {uploadFile,bringIdeas, deleteData, idea, updateIdeas}=require('../databasehelpers/querries')

router.post("/", (req, res) => {
  const studentName = req.body.stdName;
  const studentId = req.body.stdId;
  const studentDepart = req.body.stdDept;
  const topicHeader = req.body.topicHeader;
  const topicDescription = req.body.topicDesc;
  const commonID=req.session.userId
  conn.query(uploadFile,[studentName,studentId,studentDepart,topicHeader,topicDescription,commonID],(err,result)=>{
    if(err){
      return res.json({Error:err})
    }else{
      return res.json({Message:"Form submitted successfully"})
    }
  })
});

router.get("/", async (req, res) => {
  const user = req.session.user;

  return res.json({ user: user });
});
router.get('/ideas',async(req,res)=>{
  let uId = req.session.userId;
  console.log("hello get my ideas"+uId);
  conn.query(bringIdeas,[uId],(err,results,fields)=>{
   return res.json(results)
  })
})
router.delete('/:title',(req,res)=>{
  const topic=req.params.title
  console.log("topic delete"+topic);
  conn.query(deleteData,[topic],(err,result,fields)=>{
   if(result) return res.json({del:true})
    else
  return res.json(err)
  })
})
router.get('/editIdeas/:orderNO',async(req,res)=>{
  let uId = req.session.userId;
  let orderNumber=req.params.orderNO
 
  conn.query(idea,[orderNumber],(err,result,fields)=>{
    if(res){
    
      return res.json(result[0])
    }else{
      return res.json({message:"No data"})
    }
  })
})

router.put('/editingIdeas/:orderNO',async(req,res)=>{
  const orderNumber=req.params.orderNO
  console.log(orderNumber);
  const sName = req.body.stdName;
  console.log(sName);
  const sID = req.body.stdId;
  const sDepartment = req.body.stdDept;
  
  const tTitle = req.body.topicHeader;
  const tDescription= req.body.topicDesc;
  conn.query(updateIdeas,[sName,sID,sDepartment,tTitle,tDescription,orderNumber],(err,result,fields)=>{
    if(result){
    return res.json({upload:true})
    }else{
      return res.json({upload:true})
    }
    
  })
})

module.exports = router;
