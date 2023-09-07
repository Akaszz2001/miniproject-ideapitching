const express = require("express");
const conn = require("../databasehelpers/dbConnection/connection");
const router = express.Router();
const { userData, bringIdeas } = require("../databasehelpers/querries");

router.get("/", async (req, res, next) => {
  let uId = req.session.userId;
  conn.query(userData, [uId], (err, result, fields) => {
    if (result[0]) {
      // return res.json({Message:err})
      return res.json({
        id: result[0].id,
        name: result[0].name,
      });
  }
  });
});

router.get('/ideas',async(req,res)=>{
  let uId = req.session.userId;
  console.log("hello get my ideas"+uId);
  conn.query(bringIdeas,[uId],(err,results,fields)=>{
   return res.json(results)
  })
})

module.exports = router;
