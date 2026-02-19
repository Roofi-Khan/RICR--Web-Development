import dotenv from "dotenv";
dotenv.config();
import connectDB from "../config/db.js"
import User from "../models/userModel.js";
import { DummyAdmin } from "./dummy.js";
import bcrypt from "bcrypt"

const seedAdmin = async ()=>{
    try {
        await connectDB();
        const salt = await bcrypt.genSalt(10);
        const existingAdmin =await User.findOne({email:DummyAdmin.email});
        if(existingAdmin){
            if(existingAdmin.role==="admin"){
                await existingAdmin.deleteOne();
                console.log("Old Admin Removed");
            }else{
                console.log("Email Aldready Registered as other user type");
                return;
            }
        }

        console.log("Adding New Admin User");
        const AdminUser=await User.create({
            ...DummyAdmin,
            password:await bcrypt.hash(DummyAdmin.password,salt),
        });

        console.log("Admin Name:",AdminUser.fullName);
        console.log("Admin Email:",AdminUser.email);
        console.log("Admin Password:",AdminUser.password);

    } catch (error) {
        console.log(error);
        console.log("Error Seeding Admin");
    }
    process.exit(1);
}

seedAdmin();




