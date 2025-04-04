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

export const getAppliedJobs = asyncHandler(async (req, res) => {
    const userId = req.id;

    const applications = await Application.find({ applicant: userId })
        .sort({ createdAt: -1 })
        .populate({
            path: 'job',
            populate: {
                path: 'company',
            },
        });

    if (!applications || applications.length === 0) {
        return res.status(404).json({ message: "No applied jobs found" });
    }

    res.status(200).json({ applications });
});


export const getApplicants=asyncHandler(async(req,res)=>{
    const jobId=req.params.id;

    const job = await Job.findById(jobId).populate({
        path:'applications',
        options:{sort:{createdAt:-1}},
        populate:{
            path:'applicant'
        }
    });

    if(!job){
        return res.status(404).json({message:"Job not found"})
    }

    res.status(200).json({job})
})


export const updateApplicationStatus = asyncHandler(async (req, res) => {
    const applicationId = req.params.id;
    const { status } = req.body;
  
    const application=await Application.findById(applicationId);

    if(!application) return res.status(404).json({message:"Application not found"});

    application.status=status.toLowerCase(); // Convert status to lowercase to match the enum
    await application.save();
  
    res.status(200).json({ message: "Application status updated successfully" });
  });