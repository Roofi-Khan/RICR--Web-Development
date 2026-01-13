import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const UserRegister= async (req,res,next)=>{
    try {
        console.log(req.body)
        const {fullName,email,mobileNumber,password} = req.body;

         //verify that all data exists
        if(!fullName || !email || !mobileNumber || !password){
            const error = new Error("All feilds required")
            error.statusCode = 400
            return next(error);
        }
        console.log({fullName,email,mobileNumber,password});
        

        //Check for duplicate user before registration
        const existingUser = await User.findOne({email});
        if(existingUser){
            const error = new Error("Email aldready registered")
            error.statusCode = 409;
            return next(error);
        }

        console.log("Sending Data to DB");
        
        //encrypt the password
        const salt = await bcrypt.genSalt(10)
        const hashpassword = await bcrypt.hash(password,salt);

        console.log("Password Hashing Done. hashPassword = ", hashpassword);
        
        // const hashpassword = await bcrypt.hash(password,10);   // This is the another way of writing above 2 lines

        //save data to database
        const newUser = await User.create({
            fullName,
            email,
            mobileNumber,
            password:hashpassword,
        });

        //send response to Frontend
        console.log(newUser);
        res.status(201).json({message:"Registration Successfull"})
        

        
    } catch (error) {
        next(error)
        
    }
}

export const UserLogin= async (req,res,next)=>{
    try {
        //Fetch data from frontend
        const {email,password} =req.body;

        //verify that all data exists
        if(!email || !password){
            const error = new Error("All feilds required")
            error.statusCode = 400
            return next(error);
        }

         //Check if user is registerd or not
        const existingUser = await User.findOne({email});
        if(!existingUser){
            const error = new Error("Email not registered")
            error.statusCode = 401;
            return next(error);
        }

        //Verify the password
        const isVerified = await bcrypt.compare(password,existingUser.password);
        
        if(!isVerified){
             const error = new Error("Password didn't match");
            error.statusCode = 402;
            return next(error);
        }

        //send message to Frontend
        res.status(200).json({message:'Login Successfull',data:existingUser})

        //End


    } catch (error) {
        next(error)
    }
}

export const UserLogout= async (req,res,next)=>{
    try {
        res.status(200).json({message:'Logout Successfull'})
    } catch (error) {
        next(error)
    }
}