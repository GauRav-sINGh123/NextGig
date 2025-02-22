import { asyncHandler } from "../utils/asyncHandler.js";
import Job from "../models/job.model.js";

export const createJob = asyncHandler(async (req, res) => {
  const {title,description,requirements,salary,experience,location,jobType,companyId} = req.body;
  const userId = req.id;

  if (!title ||!description ||!salary ||!experience ||!location ||!jobType ||!companyId) {
    return res.status(400).json({
      message: "All Fields Are Required",
    });
   }

    const createdJob = await Job.create({
      title,
      description,
      requirements,
      salary,
      experience,
      location,
      jobType,
      company:companyId,
      createdBy:userId,
    });
  
    if(!createdJob){
        return res.status(400).json({message:"Unable To Create Job"})
    }

    res.status(201).json(createdJob)
});

export const getAllJobs = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword?.trim();  

  const query = keyword
      ? {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
            ],
        }
      : {};  

  const jobs = await Job.find(query)
      .populate("company")  
      .sort({ createdAt: -1 });

  if (!jobs.length) {
      return res.status(404).json({ message: "No jobs found" });
  }

  res.status(200).json({ jobs });
});


export const deleteJob=asyncHandler(async(req,res)=>{
    const jobId=req.params.id
    const deletedJob=await Job.findByIdAndDelete(jobId)
    if(!deletedJob){
        return res.status(400).json({message:"Unable To Delete Job"})
    }

    res.status(200).json({message:"Job Deleted Sucessfully"})
})


export const getJobById=asyncHandler(async(req,res)=>{
  const jobId=req.params.id;
 
  const job=await Job.findById(jobId);
  if(!job){
    return res.status(404).json({message:"Job Not Found"})
  }
  res.status(200).json({job})
})

export const getAllJobByAdmin=asyncHandler(async(req,res)=>{
  const adminId=req.id;

  const jobs = await Job.find({ createdBy: adminId })
  .populate('company')
  .sort({ createdAt: -1 });
  
  if(!jobs) return res.status(404).json({message:"Jobs Not Found"});

  res.status(200).json({jobs})
})