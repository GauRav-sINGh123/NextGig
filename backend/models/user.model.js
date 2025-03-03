import { Schema, model } from "mongoose";
import bycrpt from "bcryptjs";

const profileSchema = new Schema({
  bio: {
    type: String,
    default: "",
  },
  resume: {
    type: String,
    default: "",
  },
  resumeName: {
    type: String,
    default: "",
  },
  currentAddress: {
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
    phoneNumber: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 13,
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
