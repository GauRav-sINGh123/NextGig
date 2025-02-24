import express from "express"
const router=express.Router();
import { applyJob ,getApplicants,getAppliedJobs} from "../controllers/application.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

router.route('/apply/:id').post(isAuthenticated,applyJob);

router.route('/get_applied_jobs').get(isAuthenticated,getAppliedJobs);

router.route('/get_applicants/:id').get(isAuthenticated,getApplicants);

export default router