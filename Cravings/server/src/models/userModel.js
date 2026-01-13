import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String, //in backend take everything as String 
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User",userSchema) //mongoose will take this user in plural form eg:users
export default User;

