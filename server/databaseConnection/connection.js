const mysql=require('mysql')


    

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ROVERunni100",
    database:"miniproject"
})


module.exports=conn