import express from "express";
const router=express.Router();
import isAuthenticated from "../middleware/isAuthenticated.js";
import {createJob,deleteJob} from '../controllers/job.controller.js'

router.route('/create_job').post(isAuthenticated,createJob);

router.route('/delete_job/:id').delete(isAuthenticated,deleteJob);

export default router