import dotenv from 'dotenv'
dotenv.config();

import express from 'express'

const app=express(); //creating an object of express without using new keyword

app.get("/",(req,res)=>{
    console.log("Server is Running");
    res.json({message:"Server is Running Successfully"})
})


const port=process.env.PORT || 5000; // if env port is not available then it will run on 5000 port by default

app.listen(port,()=>{
    console.log("Server started at port", port);
    
})


