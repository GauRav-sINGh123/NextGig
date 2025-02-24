import express from "express";
const router=express.Router();
import isAuthenticated from "../middleware/isAuthenticated.js";
import {createJob,deleteJob, getAllJobByAdmin, getAllJobs, getJobById} from '../controllers/job.controller.js'

router.route('/create_job').post(isAuthenticated,createJob);

router.route('/get_all_jobs').get(isAuthenticated,getAllJobs);

router.route('/delete_job/:id').delete(isAuthenticated,deleteJob);

router.route('/get_admin_jobs').get(isAuthenticated,getAllJobByAdmin); 

router.route('/:id').get(isAuthenticated,getJobById);


export default router