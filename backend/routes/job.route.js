import express from "express";
const router=express.Router();
import isAuthenticated from "../middleware/isAuthenticated.js";
import {createJob,deleteJob, getAllJobByAdmin, getJobById} from '../controllers/job.controller.js'

router.route('/create_job').post(isAuthenticated,createJob);

router.route('/delete_job/:id').delete(isAuthenticated,deleteJob);

router.route('/job/:id').get(isAuthenticated,getJobById);

router.route('/get_admin_jobs').get(isAuthenticated,getAllJobByAdmin);

export default router