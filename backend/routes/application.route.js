import express from "express"
const router=express.Router();
import { applyJob } from "../controllers/application.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

router.route('/apply/:id').post(isAuthenticated,applyJob);
export default router