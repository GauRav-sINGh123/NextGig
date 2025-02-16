import express from "express"
import { currentUser, login, logout, signup,updateUser } from "../controllers/user.controller.js"
const router=express.Router()

router.route("/signup").post(signup)

router.route("/login").post(login)

router.route("/logout").post(logout)

router.route("/update_user").put(updateUser)

router.route("/current_user").get(currentUser)

export default router