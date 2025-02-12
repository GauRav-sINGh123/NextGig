import { Schema, model } from "mongoose";

const profileSchema = new Schema({
  bio: { 
    type: String, default: "" 
},
  resume: { 
    type: String, default: "" 
},
  resumeName: { 
    type: String, default: "" 
},
  currentAddress: {
     type: String, default: "" 
    },
  skills: {
     type: [String], default: [] 
    },
  company: {
     type: Schema.Types.ObjectId, ref: "Company", default: null
     },
  profilePhoto: {
     type: String, default: "" 
    },
  currentCompany: {
     type: String, default: "" 
    },
  education: { 
    type: String, default: "" 
  },
});

const userSchema = new Schema(
  {
    fullName: { 
        type: String,
        required: true 
    },
    email: {
         type: String,
         required: true,
         unique: true 
        },
    password: { 
        type: String,
        required: true 
    },
    phoneNumber: {
         type: String,
         required: true 
        },
    role: {
        type: String,
        enum: ["student", "recruiter"],
        required: true 
    },
    profile: {
         type: profileSchema,
         default: {} 
    }, // Uses a separate schema
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
