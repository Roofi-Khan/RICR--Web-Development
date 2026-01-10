import dotenv from 'dotenv'
dotenv.config();

import express from 'express'
import connectDB from "./src/config/db.js"
import AuthRouter from "./src/routers/myRouter.js"

const app=express(); //creating an object of express without using new keyword

app.use(express.json());
app.use("/auth",AuthRouter);

app.use((err,req,res,next)=>{
    const ErrorMessage=err.message || "Internal Server Error";
    const StatusCode= err.statusCode || 500;

    res.status(StatusCode).json({message:ErrorMessage});
})




app.get("/",(req,res)=>{
    console.log("Server is Running");
    res.json({message:"Server is Running Successfully"})
})


const port=process.env.PORT || 5000; // if env port is not available then it will run on 5000 port by default

app.listen(port,()=>{
    console.log("Server started at port", port);
    connectDB();
    
})


