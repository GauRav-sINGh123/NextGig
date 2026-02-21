import express from "express"
import { currentUser, login, logout, signup,updateUserProfile,updateUserProfilePicture } from "../controllers/user.controller.js"
import isAuthenticated from "../middleware/isAuthenticated.js"
import {upload} from "../middleware/multer.js"
const router=express.Router()

router.route("/signup").post(signup)

router.route("/login").post(login)

router.route("/logout").post(logout)

router.route("/update_user").put(isAuthenticated,upload,updateUserProfile)

router.route("/current_user").get(isAuthenticated,currentUser)

router.route("/update_user_profile_image").get(isAuthenticated,updateUserProfilePicture)

export default router