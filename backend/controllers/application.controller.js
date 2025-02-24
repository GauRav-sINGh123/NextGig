import { asyncHandler } from "../utils/asyncHandler.js";
import Application from "../models/application.model.js";
import Job from "../models/job.model.js";

export const applyJob = asyncHandler(async (req, res) => {
    const jobId = req.params.id;
    const userId = req.id;

    if(!jobId) return res.status(400).json({message:"All fields are required"});
    
    const existingApplication = await Application.findOne({
        job:jobId,
        applicant:userId
    })
    
    if(existingApplication) return res.status(400).json({message:"You have already applied for this job"});

    const application = await Application.create({
        job: jobId,
        applicant: userId,
    });
  
    if (!application) return res.status(400).json({ message: "Unable to apply for job" });

    const job=await Job.findById(jobId);

    job.applications.push(application._id);
    await job.save();

    res.status(201).json({ message: "Application submitted successfully" });
 

});