import { Schema, model } from "mongoose";
import bycrpt from "bcryptjs";
import { current } from "@reduxjs/toolkit";

const profileSchema = new Schema({
  resume: {
    type: String,
    default: "",
  },
  resumeName: {
    type: String,
    default: "",
  },
  skills: {
    type: [String],
    default: [],
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    default: null,
  },
  profilePhoto: {
    type: String,
    default: "",
  },
  currentCompany: {
    type: String,
    default: "",
  },
  currentRole: {
    type: String,
    default: "",
  },
  education: {
    type: String,
    default: "",
  },
  college: {
    type: String,
    default: "",
  },
  collegeEndDate: {
    type:String,
    default: "",
  },
});

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "recruiter"],
      required: true,
    },
    profile: {
      type: profileSchema,
      default: {},
    }, // Uses a separate schema
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bycrpt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bycrpt.compare(password, this.password);
};

const User = model("User", userSchema);

export default User;
