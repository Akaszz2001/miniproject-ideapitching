const express=require('express')
const mysql=require('mysql')
// for environment variables
const  dotenv=require('dotenv').config()
//for server local port
const PORT=process.env.PORT||5001
const app=express()

// for cross platform
const cors=require('cors')
app.use(cors())

// used for parsing the data from client
app.use(express.urlencoded({extended: true}));
app.use(express.json());
 

//database connection
const conn = require('./databaseConnection/connection')
conn.connect((err)=>{
    if(err)
    throw err;
    else
    console.log("database connected successfuly");
})


//routes

app.use('/login',require('./routes/login'))
app.use('/signup',require('./routes/signup'))

//server local port
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})

