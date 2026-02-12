import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import morgan from "morgan";
import AuthRouter from "../server/src/routers/authRouter.js"

const app = express();

app.use(cors({origin:"http://localhost:5173",credentials:true}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/auth",AuthRouter);