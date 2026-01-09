import express from 'express'
import { UserRegister,UserLogin,UserLogout } from '../controllers/myController.js';

const router = express.Router();

router.post("/register",UserRegister); //function callback ho rha h
router.post("/login",UserLogin);
router.get("/logout",UserLogout);

export default router;