import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import getURI from "../utils/getURI.js";
import cloudinary from "../utils/cloudinary.js";
dotenv.config();

export const signup = asyncHandler(async (req, res) => {
  const { fullName, email, password, role } = req.body;

  if (!fullName || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await User.create({ fullName, email, password, role });

  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) return res.status(404).json({ message: "User not found" });

  res.status(201).json({ message: "User created successfully", createdUser });
});

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

export const logout = asyncHandler(async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  res.status(200).json({
    success: true,
    message: "User logged out successfully",
  });
});

export const currentUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.id).select("-password");
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json({ user });
});

export const updateUserProfile = asyncHandler(async (req, res) => {
  const {fullName,skills,currentCompany,education,collegeEndDate,currentRole} = req.body;

  const userId = req.id;
  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // ===== Update Only If Value Exists & Not Empty or Undefined =====

  if (fullName !== undefined && fullName.trim() !== "") {
    user.fullName = fullName.trim();
  }

  if (skills !== undefined && skills.length !== 0) {
    user.profile.skills = skills;
  }

  if (currentCompany !== undefined && currentCompany.trim() !== "") {
    user.profile.currentCompany = currentCompany.trim();
  }

  if (education !== undefined && education.trim() !== "") {
    user.profile.education = education.trim();
  }

  if (collegeEndDate !== undefined && collegeEndDate !== "") {
    user.profile.collegeEndDate = collegeEndDate;
  }

  if (currentRole !== undefined && currentRole.trim() !== "") {
    user.profile.currentRole = currentRole.trim();
  }

  await user.save();

  const updatedUser = await User.findById(userId).select("-password");

  res.status(200).json({
    message: "Profile updated successfully",
    user: updatedUser,
  });
});


// ===== Separate Endpoints For File Uploads =====

//This method updates the user's profile picture.
export const updateUserProfilePicture = asyncHandler(async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Profile photo is required" });
  }

  const userId = req.id;
  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const fileUrl = getURI(req.file);

  const uploadResponse = await cloudinary.uploader.upload(fileUrl.content, {
    folder: "profile_photos",
  });

  user.profile.profilePhoto = uploadResponse.secure_url;

  await user.save();

  const updatedUser = await User.findById(userId).select("-password");

  res.status(200).json({
    message: "Profile picture updated successfully",
    user: updatedUser,
  });
});

// This method updates the user's resume.
export const updateUserResume = asyncHandler(async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Resume file is required" });
  }

  const userId = req.id;
  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const fileUrl = getURI(req.file);

  const uploadResponse = await cloudinary.uploader.upload(fileUrl.content, {
    folder: "resumes",
    resource_type: "auto",
  });

  user.profile.resume = uploadResponse.secure_url;
  user.profile.resumeName = req.file.originalname;

  await user.save();

  const updatedUser = await User.findById(userId).select("-password");

  res.status(200).json({
    message: "Resume uploaded successfully",
    user: updatedUser,
  });
});
