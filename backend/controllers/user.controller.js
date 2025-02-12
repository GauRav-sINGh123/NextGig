import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const signup=asyncHandler(async(req,res)=>{
  const {fullName,email,password,phoneNumber,role}=req.body;
    
  if([fullName,email,password,phoneNumber,role].includes('')) return res.status(400).json({message:"All fields are required"})
    
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }
  
  const user=await User.create({fullName,email,password,phoneNumber,role})

  const createdUser = await User.findById(user._id).select(
    "-password"
  );

  if(!createdUser) return res.status(404).json({message:"User not found"})

  res.status(201).json({message:"User created successfully",createdUser})

})
 



export const login=asyncHandler(async(req,res)=>{
  const {email,password}=req.body;

  if([email,password].includes('')) return res.status(400).json({message:"All fields are required"})

  const user=await User.findOne({email})

  if(!user) return res.status(404).json({message:"User not found"})

  const checkPassword=await user.isPasswordCorrect(password)

  if(!checkPassword) return res.status(400).json({message:"Invalid credentials"})

  res.status(200).json({message:"Login successful"})

})

export const logout=asyncHandler(async(req,res)=>{
    console.log("logout")
})

export const currentUser=asyncHandler(async(req,res)=>{
    console.log("current user")
})