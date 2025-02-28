import express from "express"
import { currentUser, login, logout, signup,updateUser } from "../controllers/user.controller.js"
import isAuthenticated from "../middleware/isAuthenticated.js"
import {upload} from "../middleware/multer.js"
const router=express.Router()

router.route("/signup").post(signup)

router.route("/login").post(login)

router.route("/logout").post(logout)

router.route("/update_user").put(isAuthenticated,upload,updateUser)

router.route("/current_user").get(isAuthenticated,currentUser)

export default router