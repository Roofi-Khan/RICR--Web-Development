import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); //Connection the MongoDB Database

    console.log(
     `MongoDb Connected at:${conn.connection.host}:${conn.connection.port}`
    );
    console.log("DataBase Name: ", conn.connection.name);
  } catch (error) {
    console.log(error);
    process.exit(1); //process is a variable
  }
};

export default connectDB;
