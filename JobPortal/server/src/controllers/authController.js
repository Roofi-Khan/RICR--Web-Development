import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import express from "express";

export const UserRegister = async (req, res, next) => {
  try {
    console.log(req.body);
    const { fullName, email, mobile, password } = req.body;

    if (!fullName || !email || !mobile || !password) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      res.next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email aldready Registered");
      error.statusCode = 409;
      res.next(error);
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      fullName,
      email: email.toLowerCase(),
      mobile,
      password: hashPassword,
    });

    console.log(newUser);
    res.status(201).json({ message: "Registration Successful" });
  } catch (error) {
    next(error);
  }
};
