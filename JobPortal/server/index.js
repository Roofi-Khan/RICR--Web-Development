import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import morgan from "morgan";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv"
import AuthRouter from "./src/routers/authRouter.js"

dotenv.config();

const app = express();

app.use(cors({origin:"http://localhost:5173",credentials:true}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/auth",AuthRouter);

app.get("/", (req,res)=>{
    console.log("Server is Loading");

})
app.use((err,req,res,next)=>{
    const ErrorMessage = err.message ||"Internal Server Error";
    const StatusCode =err.statusCode ||500;
    console.log("Error Found",{ErrorMessage,StatusCode})

    res.statusCode(StatusCode).json({message:ErrorMessage})
})

const port = process.env.PORT ||5000;

app.listen(port,async ()=>{
    console.log("Server Started at port:" ,port);
    connectDB();
})
