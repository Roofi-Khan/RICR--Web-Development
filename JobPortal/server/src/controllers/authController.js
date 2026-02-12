import User from "../models/userModel.js"
import bcrypt from "bcrypt"
import express from "express"

const UserRegister = async (req,res,next)=>{
    console.log(req.body)
    const {fullName,email,mobile,password} =req.body;

    if(!fullName || !email || !mobile || !password ){
        const error = new Error("Fill the form correctly");
        error.statusCode(400);
        res.next(error);
    }

    const existingUser = await User.find({email});
    if(existingUser){
const error = new Error("Fill the form correctly");
        error.statusCode(400);
        res.next(error);
    }

}