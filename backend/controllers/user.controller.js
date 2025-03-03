import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();

export const signup=asyncHandler(async(req,res)=>{
  const {fullName,email,password,role}=req.body;
    
  if([fullName,email,password,role].includes('')) return res.status(400).json({message:"All fields are required"})
    
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }
  
  const user=await User.create({fullName,email,password,role})

  const createdUser = await User.findById(user._id).select(
    "-password"
  );

  if(!createdUser) return res.status(404).json({message:"User not found"})

  res.status(201).json({message:"User created successfully",createdUser})

})
 



export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validates inputs
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Finds user by email
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Checks password
  const checkPassword = await user.isPasswordCorrect(password);

  if (!checkPassword) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // Generates a JWT token
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });

  // Sets cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000, 
  });

  // Excludes password field
  const currentUser = await User.findById(user._id).select("-password");

  res.status(200).json({ message: "Login successful", user: currentUser });
});

export const logout=asyncHandler(async(req,res)=>{
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
});

res.status(200).json({
    success: true,
    message: "User logged out successfully",
});
})

export const currentUser=asyncHandler(async(req,res)=>{
    const user=await User.findById(req.id).select("-password")
    if(!user) return res.status(404).json({message:"User not found"})
    res.status(200).json({user})
})


export const updateUser=asyncHandler(async(req,res)=>{
   const {fullName,phoneNumber,bio,currentAddress,skills,currentCompany,education,college,collegeEndDate}=req.body;
   
   let skillsArray;
   if(skills){
       skillsArray = skills.split(",");
   }
   const userId = req.id;  
   let user = await User.findById(userId);

   if (!user) {
     return res.status(404).json({ message: "User not found" });
   }
 
   user.fullName = fullName;
   user.phoneNumber = phoneNumber;
   user.profile.bio = bio;
   user.profile.currentAddress = currentAddress;
   user.profile.skills = skillsArray;
   user.profile.currentCompany = currentCompany;
   user.profile.education = education;
   user.profile.college = college;
   user.profile.collegeEndDate = collegeEndDate;
 
   await user.save();

   res.status(200).json({message:"User updated successfully"})
})
